import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteCard from "../components/NoteCard";
import { THEME_ENUM, useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import {
  getLocalizedStrings,
  LOCALIZATION_STRINGS_ENUM,
} from "../utils/localization";
import { archiveNote, getNote, unarchiveNote, deleteNote } from "../utils/network-data";
import { useLoading } from "../context/LoadingContext";
import { useSnackbar } from "../context/SnackbarContext";
import { useAuth } from "../context/AuthContext";

const NoteDetail = () => {
  const {getAuth} = useAuth();
  const params = useParams();
  const [note, setNote] = useState();
  const [isArchived, setIsArchived] = useState(false);
  const navigate = useNavigate();

  const { setLoading } = useLoading();

  const { getTheme } = useTheme();
  const isDarkTheme = getTheme() === THEME_ENUM.dark;

  const { getLanguage } = useLanguage();
  const currentLang = getLanguage();

  const {showSnackbar} = useSnackbar();

  useEffect(() => {
    if (params.noteId) {
      handleGetNote(params.noteId)
    }
  }, [params.noteId]);

  const handleGetNote = async (noteId) =>{
    setLoading(true)

    const response = await getNote(noteId);

    if(!response?.data?.owner || response?.data?.owner !== getAuth().id) {
      navigate('/')
      setLoading(false)
      return
    }

    setNote(response.data);
    setIsArchived(response?.data?.archived ?? false);

    setLoading(false)
  }

  const handleDelete = async () => {
    setLoading(true)
    
    const response = await deleteNote(params.noteId);
    if(!response.error) {
      showSnackbar("Successfully delete note.")
    }

    setLoading(false)
    navigate(`/`);
  };

  const handleArchive = async () => {
    setLoading(true);
    if (isArchived) {
      const response = await unarchiveNote(params.noteId);
      if(!response.error) {
        showSnackbar("Successfully unarchive note.")
      }
    } else {
      const response = await archiveNote(params.noteId);
      if(!response.error) {
        showSnackbar("Successfully archive note.")
      }
    }
    setLoading(false);
    navigate(`/`);
  };

  return (
    <div
      className="container text-center justify"
      style={{ paddingTop: "5.1625rem", minHeight: 780 }}
    >
      <h1
        className={`text-2xl font-bold ${
          isDarkTheme ? "text-white" : "text-black"
        } text-center my-5 pt-5`}
      >
        {getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.noteDetail, currentLang)}
      </h1>
      <NoteCard
        key={note?.id}
        title={note?.title}
        date={note?.date}
        description={note?.body}
        isDetail
      />

      <button
        type="submit"
        className="btn btn-primary w-100 mt-5"
        style={{ background: "#923cb5", border: "none" }}
        onClick={handleArchive}
      >
        {isArchived
          ? getLocalizedStrings(
              LOCALIZATION_STRINGS_ENUM.unArchive,
              currentLang
            )
          : getLocalizedStrings(
              LOCALIZATION_STRINGS_ENUM.navBarArchive,
              currentLang
            )}
      </button>
      <button
        type="submit"
        className="btn btn-primary w-100 mt-2"
        style={{ background: "red", border: "none" }}
        onClick={handleDelete}
      >
        {getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.delete, currentLang)}
      </button>
    </div>
  );
};

export default NoteDetail;
