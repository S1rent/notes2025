import React, { useEffect, useState } from "react";
import { useNotes } from "../context/NoteContext";
import { useNavigate, useParams } from "react-router-dom";
import NoteCard from "../components/NoteCard";

const NoteDetail = () => {

  const params = useParams()
  const { getNote, deleteNote, archiveNote, unarchiveNote }  = useNotes();
  const [note, setNote] = useState();
  const [isArchived, setIsArchived] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    if(params.noteId) 
    {
      const data = getNote(params.noteId)
      setNote(data)
      setIsArchived(data?.isArchived ?? false)
    }
  }, [params.noteId])

  const handleDelete = () => {
    deleteNote(params.noteId)

    navigate(`/`)
  }

  const handleArchive = () => {
    if(isArchived) {
      unarchiveNote(params.noteId)
    } else {
      archiveNote(params.noteId)
    }

    navigate(`/`)
  }

  return (
    <div className="container text-center justify" style={{ marginTop: '5.1625rem', minHeight: 720 }}>
      <h1 className="text-2xl font-bold text-black text-center my-5 pt-5">Note Detail</h1>
      <NoteCard
        key={note?.id}
        title={note?.title}
        date={note?.date}
        description={note?.description}
        isDetail
      />

      <button type="submit" className="btn btn-primary w-100 mt-5" style={{ background: '#923cb5', border: 'none' }} onClick={handleArchive}>
        {isArchived ? "Un-Archive" : "Archive"}
      </button>
      <button type="submit" className="btn btn-primary w-100 mt-2" style={{ background: 'red', border: 'none' }} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default NoteDetail;