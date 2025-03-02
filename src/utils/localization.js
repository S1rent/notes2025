import { LANGUAGE_ENUM } from "../context/LanguageContext";

const ENGLISH_STRINGS = {
  homeActiveNotes: "Active Notes",
  homeNoteSearch: "Search by title...",
  navBarCreate: "Create Note",
  navBarArchive: "Archive",
  createNote: "Create a Note",
  title: "Title",
  description: "Description",
  enterTitle: "Enter title",
  enterDescription: "Enter description",
  archiveThisNote: "Archive this note?",
  saveNote: "Save note",
  archivedNotes: "Archived Notes",
  delete: "Delete",
  noteDetail: "Note Detail",
  unArchive: "Un-Archive"
};

const INDONESIA_STRINGS = {
  homeActiveNotes: "Catatan Aktif",
  homeNoteSearch: "Cari berdasarkan judul...",
  navBarCreate: "Buat Note",
  navBarArchive: "Arsip",
  createNote: "Buat catatan baru",
  title: "Judul",
  description: "Deskripsi",
  enterTitle: "Masukkan judul",
  enterDescription: "Masukkan deskripsi",
  archiveThisNote: "Arsipkan catatan ini?",
  saveNote: "Simpan catatan",
  archivedNotes: "Catatan Arsip",
  delete: "Hapus",
  noteDetail: "Detail Catatan",
  unArchive: "Batalkan Arsip"
};

export const LOCALIZATION_STRINGS_ENUM = {
  homeActiveNotes: "homeActiveNotes",
  homeNoteSearch: "homeNoteSearch",
  navBarCreate: "navBarCreate",
  navBarArchive: "navBarArchive",
  createNote: "createNote",
  title: "title",
  description: "description",
  enterTitle: "enterTitle",
  enterDescription: "enterDescription",
  archiveThisNote: "archiveThisNote",
  saveNote: "saveNote",
  archivedNotes: "archivedNotes",
  delete: "delete",
  noteDetail: "noteDetail",
  unArchive: "unArchive"
};

export const getLocalizedStrings = (keyword, language) => {
  return language === LANGUAGE_ENUM.indonesia
    ? INDONESIA_STRINGS[keyword]
    : ENGLISH_STRINGS[keyword];
};
