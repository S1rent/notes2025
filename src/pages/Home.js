import React, { useEffect, useState } from "react";
import { useNotes } from "../context/NoteContext";
import { useAuth } from "../context/AuthContext";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import ThemedContainer from "../components/ThemedContainer";
import { THEME_ENUM, useTheme } from "../context/ThemeContext";
import {
  LOCALIZATION_STRINGS_ENUM,
  getLocalizedStrings,
} from "../utils/localization";
import { useLanguage } from "../context/LanguageContext";
import { getActiveNotes, getUserLogged } from "../utils/network-data";
import { useLoading } from "../context/LoadingContext";

const Home = () => {
  const { noteList, setNotes } = useNotes();
  const {setLoading} = useLoading();

  const { getAuth, setUserAuth } = useAuth();
  const authenticatedUser = getAuth();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  const { getTheme } = useTheme();
  const isDarkTheme = getTheme() === THEME_ENUM.dark;

  const { getLanguage } = useLanguage();
  const currentLanguage = getLanguage();

  const filteredNotes = noteList
    .filter((x) => !x.archived)
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
    setLoading(true)
    const response = await getActiveNotes();
    setNotes(
      response.data.map((x) => {
        return { ...x, isArchived: false };
      })
    );
    setLoading(false)
  }

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = async() => {
    const result = await getUserLogged()
    setUserAuth({
      ...getAuth(), 
      id: result?.data?.id ?? "",
      name: result?.data?.name ?? "",
      email: result?.data?.email ?? ""
    })
  }

  return (
    <ThemedContainer
      className="text-center d-flex align-items-center"
      style={{
        paddingTop: "5.5rem",
        textAlign: "center",
        minHeight: 780,
        flexDirection: "column",
      }}
    >
      <h1
        className={`text-2xl font-bold ${
          isDarkTheme ? "text-white" : "text-black"
        } text-center`}
      >
        {getLocalizedStrings(
          LOCALIZATION_STRINGS_ENUM.homeActiveNotes,
          currentLanguage
        )}
      </h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <NoteList notes={filteredNotes} />
    </ThemedContainer>
  );
};

export default Home;
