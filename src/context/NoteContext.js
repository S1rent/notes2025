import React, { createContext, useContext, useState } from "react";

const NoteContext = createContext();

const dummyNotes = [
    { id: 1, title: "Babel", date: "Kamis, 14 April 2022", description: "Babel merupakan tools open-source..." },
    { id: 2, title: "Functional Component", date: "Kamis, 14 April 2022", description: "Functional component merupakan..." },
    { id: 3, title: "Modularization", date: "Kamis, 14 April 2022", description: "Modularization merupakan teknik..." },
    { id: 4, title: "ESM", date: "Kamis, 14 April 2022", description: "ESM (ECMAScript Module) merupakan format modularisasi..." },
    { id: 5, title: "Module Bundler", date: "Kamis, 14 April 2022", description: "Module bundler merupakan tools yang digunakan..." },
    { id: 6, title: "Lifecycle", date: "Kamis, 14 April 2022", description: "Lifecycle merupakan kumpulan method yang menjadi siklus hidup..." },
  ];

export const useNotes = () => {
    return useContext(NoteContext);
};

export const NoteProvider = ({ children }) => {
    const [noteList, setNoteList] = useState(dummyNotes);
    const [archivedNoteList, setArchivedNoteList] = useState([]);

    const addNote = (note) => {
        setNoteList([...noteList, note]);
    };

    const deleteNote = (id) => {
        const noteToArchive = noteList.find(note => note.id === id);
        if (noteToArchive) {
            setNoteList(noteList.filter(note => note.id !== id));
        }
    };

    const archiveNote = (noteName) => {
        const noteToArchive = noteList.find(note => note.name === noteName);
        if (noteToArchive) {
            setNoteList(noteList.filter(note => note.name !== noteName));
            setArchivedNoteList([...archivedNoteList, noteToArchive]);
        }
    };

    const unarchiveNote = (noteName) => {
        const noteToUnarchive = archivedNoteList.find(note => note.name === noteName);
        if (noteToUnarchive) {
            setArchivedNoteList(archivedNoteList.filter(note => note.name !== noteName));
            setNoteList([...noteList, noteToUnarchive]);
        }
    };

    return (
        <NoteContext.Provider value={{ noteList, archivedNoteList, addNote, archiveNote, unarchiveNote, deleteNote }}>
            {children}
        </NoteContext.Provider>
    );
};