import React from "react";
import PropTypes from "prop-types";
import NoteCard from "./NoteCard";
import "bootstrap/dist/css/bootstrap.min.css";

const NoteList = ({ notes }) => {
  return (
    <div className="container text-center d-flex flex-wrap gap-4 justify-content-center">
      {notes.map((note) => (
        <NoteCard key={note.id} title={note.title} date={note.date} description={note.description} />
      ))}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NoteList;