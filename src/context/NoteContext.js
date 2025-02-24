import React, { createContext, useContext, useState } from "react";

const NoteContext = createContext();

const dummyNotes = [
    { id: "1", title: "Babel", date: "Thursday 14 April 2022", description: "Babel merupakan tools open-source...", archived: false },
    { id: "2", title: "Functional Component", date: "Thursday 14 April 2022", description: "Functional component merupakan...", archived: true },
    { id: "3", title: "Modularization", date: "Thursday 14 April 2022", description: "Modularization merupakan teknik...", archived: false },
    { id: "4", title: "ESM", date: "Thursday 14 April 2022", description: "ESM (ECMAScript Module) merupakan format modularisasi...", archived: false },
    { id: "5", title: "Module Bundler", date: "Thursday 14 April 2022", description: "Module bundler merupakan tools yang digunakan...", archived: false },
    { id: "6", title: "Lifecycle", date: "Thursday 14 April 2022", description: "Lifecycle merupakan kumpulan method yang menjadi siklus hidup...", archived: false },
  ];

export const useNotes = () => {
    return useContext(NoteContext);
};

export const NoteProvider = ({ children }) => {
    const [noteList, setNoteList] = useState(dummyNotes);

    const addNote = (note) => {
        setNoteList([...noteList, note]);
    };

    const deleteNote = (noteId) => {
        setNoteList(noteList.filter(note => note.id !== noteId));
    };

    const archiveNote = (noteId) => {
        const noteToArchive = noteList.find(note => note.id === noteId);
        if (noteToArchive) {
            setNoteList([...noteList.filter(note => note.id !== noteId), {...noteToArchive, archived: true}]);
        } 
    };

    const unarchiveNote = (noteId) => {
        const noteToUnarchive = noteList.find(note => note.id === noteId);
        if (noteToUnarchive) {
            setNoteList([...noteList.filter(note => note.id !== noteId), {...noteToUnarchive, archived: false}]);
        }
    };

    const getNote = (noteId) => {
        let note = noteList.find(note => note.id === noteId);
        return note
    };

    return (
        <NoteContext.Provider value={{ noteList, addNote, archiveNote, unarchiveNote, deleteNote, getNote }}>
            {children}
        </NoteContext.Provider>
    );
};