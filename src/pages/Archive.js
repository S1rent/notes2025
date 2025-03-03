import React, { useEffect, useState } from "react";
import { useNotes } from "../context/NoteContext";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { THEME_ENUM, useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import {
  getLocalizedStrings,
  LOCALIZATION_STRINGS_ENUM,
} from "../utils/localization";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../utils/network-data";
import { useAuth } from "../context/AuthContext";

const Archive = () => {
  const { noteList, setNotes } = useNotes();
  const [searchTerm, setSearchTerm] = useState("");

  const { getAuth } = useAuth();
  const authenticatedUser = getAuth();

  const { getTheme } = useTheme();
  const isDarkTheme = getTheme() === THEME_ENUM.dark;
  const { getLanguage } = useLanguage();
  const currentLang = getLanguage();

  const [searchParams, setSearchParams] = useSearchParams();

  const filteredNotes = noteList
    .filter((x) => x.archived)
    .filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((x) => x.owner === authenticatedUser.id);

  useEffect(() => {
    if (searchTerm) {
      setSearchParams({ searchKey: searchTerm });
    } else {
      setSearchParams({});
    }
  }, [searchTerm]);

  useEffect(() => {
    setSearchTerm(searchParams.get("searchKey") ?? "");
    fetchActiveNotes();
  }, []);

  const fetchActiveNotes = async () => {
    const response = await getArchivedNotes();
    setNotes(
      response.data.map((x) => {
        return { ...x, isArchived: true };
      })
    );
  };

  return (
    <div
      className="d-flex flex-column align-items-center gap-4"
      style={{ paddingTop: "5.5rem", textAlign: "center", minHeight: 780 }}
    >
      <h1
        className={`text-2xl font-bold ${
          isDarkTheme ? "text-white" : "text-black"
        } text-center`}
      >
        {getLocalizedStrings(
          LOCALIZATION_STRINGS_ENUM.archivedNotes,
          currentLang
        )}
      </h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <NoteList notes={filteredNotes} />
    </div>
  );
};

export default Archive;
