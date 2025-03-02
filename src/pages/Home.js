import React, { useEffect, useState } from "react";
import { useNotes } from "../context/NoteContext";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import ThemedContainer from "../components/ThemedContainer";
import { THEME_ENUM, useTheme } from "../context/ThemeContext";
import { LOCALIZATION_STRINGS_ENUM, getLocalizedStrings } from "../utils/localization";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { noteList } = useNotes();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  const {getTheme} = useTheme();
  const isDarkTheme = getTheme() === THEME_ENUM.dark

  const {getLanguage} = useLanguage();
  const currentLanguage = getLanguage();

  const filteredNotes = noteList
    .filter((x) => !x.archived)
    .filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  useEffect(() => {
    if (searchTerm) {
      setSearchParams({ searchKey: searchTerm });
    } else {
      setSearchParams({});
    }
  }, [searchTerm]);

  useEffect(() => {
    setSearchTerm(searchParams.get("searchKey") ?? "");
  }, []);

  return (
    <ThemedContainer
    className="text-center d-flex align-items-center"
      style={{ paddingTop: "5.5rem", textAlign: "center", minHeight: 720, flexDirection: 'column' }}
    >
      <h1 className={`text-2xl font-bold ${isDarkTheme ? "text-white" : "text-black"} text-center`}>
        {getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.homeActiveNotes, currentLanguage)}
      </h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <NoteList notes={filteredNotes} />
    </ThemedContainer>
  );
};

export default Home;
