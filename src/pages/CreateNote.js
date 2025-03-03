import React from "react";
import NoteForm from "../components/NoteForm";
import { useNavigate } from 'react-router-dom';
import { THEME_ENUM, useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedStrings, LOCALIZATION_STRINGS_ENUM } from "../utils/localization";
import { addNote } from "../utils/network-data";
import { useLoading } from "../context/LoadingContext";
import { useSnackbar } from "../context/SnackbarContext";

const CreateNote = () => {
  const {showSnackbar} = useSnackbar();
  const {setLoading} = useLoading();
  const {getTheme} = useTheme();
  const isDarkTheme = getTheme() === THEME_ENUM.dark
  const {getLanguage} = useLanguage();
  const currentLang = getLanguage();

  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    setLoading(true)
    const response = await addNote({
      title: data.title,
      body: data.description,
    })
    if(!response.error) {
      showSnackbar("Successfully create note.")
    }

    setLoading(false)

    navigate('/');
  };

  return (
    <div className="container" style={{ paddingTop: '5.5rem', minHeight: 800 }}>
      <h1 className={`text-2xl font-bold ${isDarkTheme ? "text-white" : 'text-black'} my-5`}>{getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.createNote, currentLang)}</h1>
      <NoteForm onSubmit={handleFormSubmit} />
    </div>
    

  );
};

export default CreateNote;