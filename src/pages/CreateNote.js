import React from "react";
import NoteForm from "../components/NoteForm";
import { useNotes } from "../context/NoteContext";
import { useNavigate } from 'react-router-dom';
import { THEME_ENUM, useTheme } from "../context/ThemeContext";

const CreateNote = () => {
  const { addNote } = useNotes();
  const {getTheme} = useTheme();
  const isDarkTheme = getTheme() === THEME_ENUM.dark
  const today = new Date()
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    const newId = new Date().getTime()
    addNote({
      id: newId.toString(),
      title: data.title,
      createdAt: today.toISOString(),
      body: data.description,
      archived: data?.isArchive
    })

    navigate('/');
  };

  return (
    <div className="container" style={{ paddingTop: '5.5rem', minHeight: 800 }}>
      <h1 className={`text-2xl font-bold ${isDarkTheme ? "text-white" : 'text-black'} my-5`}>Create a Note</h1>
      <NoteForm onSubmit={handleFormSubmit} />
    </div>
    

  );
};

export default CreateNote;