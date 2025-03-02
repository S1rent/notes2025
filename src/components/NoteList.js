import React from "react";
import PropTypes from "prop-types";
import NoteCard from "./NoteCard";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemedContainer from "./ThemedContainer";

const NoteList = ({ notes }) => {

  if(notes?.length === 0)
  {
    return (
      <div>
        The list is empty, try to add some.
      </div>
    )
  }

  return (
    <ThemedContainer style={{ display: 'flex', flexWrap: 'wrap' }}>
      {notes.map((note) => (
        <NoteCard key={note.id} title={note.title} date={note.createdAt} description={note.body} id={note.id} />
      ))}
    </ThemedContainer>
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