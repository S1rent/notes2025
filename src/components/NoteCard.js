import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const NoteCard = ({ title, date, description }) => {
  return (
    <div className="border p-4 rounded-lg bg-gray-800 text-black card" style={{ width: '40%' }}>
      <h3 className="font-bolder text-lg">{title}</h3>
      <p className="text-sm text-black">{date}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
};

NoteCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default NoteCard;