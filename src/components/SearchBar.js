import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedStrings, LOCALIZATION_STRINGS_ENUM } from "../utils/localization";

const SearchBar = ({ searchTerm, onSearch }) => {

  const {getLanguage} = useLanguage();
  const currentLanguage = getLanguage();

  return (
    <input
      type="text"
      placeholder={getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.homeNoteSearch, currentLanguage)}
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
