import React, { useState } from "react";
import { useNotes } from "../context/NoteContext";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { THEME_ENUM, useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedStrings, LOCALIZATION_STRINGS_ENUM } from "../utils/localization";

const Archive = () => {
  const { noteList } = useNotes();
  const [searchTerm, setSearchTerm] = useState("");

  const { getTheme } = useTheme();
  const isDarkTheme = getTheme() === THEME_ENUM.dark;
  const {getLanguage} = useLanguage();
  const currentLang = getLanguage();

  const filteredNotes = noteList
    .filter((x) => x.archived)
    .filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
        {getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.archivedNotes, currentLang)}
      </h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <NoteList notes={filteredNotes} />
    </div>
  );
};

export default Archive;
