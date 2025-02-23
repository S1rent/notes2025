import React, { createContext, useContext, useState } from "react";

const NoteContext = createContext();

const dummyNotes = [
    { id: "1", title: "Babel", date: "Thursday 14 April 2022", description: "Babel merupakan tools open-source..." },
    { id: "2", title: "Functional Component", date: "Thursday 14 April 2022", description: "Functional component merupakan..." },
    { id: "3", title: "Modularization", date: "Thursday 14 April 2022", description: "Modularization merupakan teknik..." },
    { id: "4", title: "ESM", date: "Thursday 14 April 2022", description: "ESM (ECMAScript Module) merupakan format modularisasi..." },
    { id: "5", title: "Module Bundler", date: "Thursday 14 April 2022", description: "Module bundler merupakan tools yang digunakan..." },
    { id: "6", title: "Lifecycle", date: "Thursday 14 April 2022", description: "Lifecycle merupakan kumpulan method yang menjadi siklus hidup..." },
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

    const addArchiveNote = (note) => {
        setArchivedNoteList([...archivedNoteList, note]);
    };

    const deleteNote = (noteId) => {
        const noteToArchive = noteList.find(note => note.id === noteId);
        if (noteToArchive) {
            setNoteList(noteList.filter(note => note.id !== noteId));
        } else {
            setArchivedNoteList(archivedNoteList.filter(note => note.id !== noteId));
        }
    };

    const archiveNote = (noteId) => {
        const noteToArchive = noteList.find(note => note.id === noteId);
        if (noteToArchive) {
            setNoteList(noteList.filter(note => note.id !== noteId));
            setArchivedNoteList([...archivedNoteList, noteToArchive]);
        } 
    };

    const unarchiveNote = (noteId) => {
        const noteToUnarchive = archivedNoteList.find(note => note.id === noteId);
        if (noteToUnarchive) {
            setArchivedNoteList(archivedNoteList.filter(note => note.id !== noteId));
            setNoteList([...noteList, noteToUnarchive]);
        }
    };

    const getNote = (noteId) => {
        let note = noteList.find(note => note.id === noteId);
        if(!note) 
        {
            note = {
                ...archivedNoteList.find(note => note.id === noteId),
                isArchived: true,
            }
        }
        return note
    };

    return (
        <NoteContext.Provider value={{ noteList, archivedNoteList, addNote, archiveNote, unarchiveNote, deleteNote, addArchiveNote, getNote }}>
            {children}
        </NoteContext.Provider>
    );
};