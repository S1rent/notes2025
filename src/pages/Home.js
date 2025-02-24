import React, { useEffect, useState } from "react";
import { useNotes } from "../context/NoteContext";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const { noteList } = useNotes();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotes = noteList.filter(x => !x.archived).filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (searchTerm) {
      setSearchParams({searchKey: searchTerm})  
    } else {
      setSearchParams({})
    }
  }, [searchTerm])

  useEffect(() => {
    setSearchTerm(searchParams.get('searchKey') ?? "")
  }, [])

  return (
    <div className="p-4 d-flex flex-column align-items-center gap-4" style={{ marginTop: '5rem', textAlign: 'center', minHeight: 720 }}>
      <h1 className="text-2xl font-bold text-black text-center">Catatan Aktif</h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <NoteList notes={filteredNotes} />
    </div>
  );
};

export default Home;
