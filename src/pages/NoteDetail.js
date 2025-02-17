import React from "react";
import PropTypes from "prop-types";

const NoteDetail = ({ title, createdDate, description }) => {
  return <h1>NoteDetail Page</h1>;
};

NoteDetail.propTypes = {
    title: PropTypes.string,
    createdDate: PropTypes.instanceOf(Date),
    description: PropTypes.string,
}

export default NoteDetail;