import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const NoteCard = ({ title, date, description, id, isDetail }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return isDetail ? (
    <div
      className="border p-4 rounded-lg bg-gray-800 text-black card"
      style={{ width: isDetail ? "100%" : "40%" }}
    >
      <h3 className="font-bolder text-lg">{title}</h3>
      <p className="text-sm text-black">{date}</p>
      <p className="mt-2">{description}</p>
    </div>
  ) : (
    <Link
      className="border p-4 rounded-lg bg-gray-800 text-black card"
      style={{ width: isDetail ? "100%" : "40%" }}
      to={`/note/${id}`}
    >
      <div>
        <h3 className="font-bolder text-lg">{title}</h3>
        <p className="text-sm text-black">{formattedDate}</p>
        <p className="mt-2">{description}</p>
      </div>
    </Link>
  );
};

NoteCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isDetail: PropTypes.bool,
};

export default NoteCard;
