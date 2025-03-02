import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Cari berdasarkan judul..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      style={{ outline: 'none' }}
      className="w-50 p-2 border rounded-lg bg-gray-900 text-black card"
    />
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
