import React from "react";
import NoteForm from "../components/NoteForm";
import { useNotes } from "../context/NoteContext";
import { useNavigate } from 'react-router-dom';

const CreateNote = () => {
  const { addNote } = useNotes();
  const today = new Date()
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    const newId = new Date().getTime()

    addNote({
      id: newId.toString(),
      title: data.title,
      date: today.toLocaleDateString('en-GB', {
        weekday: 'long',  
        day: '2-digit',   
        month: 'long',    
        year: 'numeric'
      }),
      description: data.description,
      archived: data?.isArchive
    })

    navigate('/');
  };

  return (
    <div className="container" style={{ marginTop: '6.125rem', minHeight: 700 }}>
      <h1 className="text-2xl font-bold text-black my-5">Create a Note</h1>
      <NoteForm onSubmit={handleFormSubmit} />
    </div>
    

  );
};

export default CreateNote;