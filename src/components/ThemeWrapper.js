import React from "react";
import { THEME_ENUM, useTheme } from "../context/ThemeContext";
import PropTypes from "prop-types";

const ThemeWrapper = ({ children }) => {
  const { getTheme } = useTheme();
  const isDarkTheme = getTheme() === THEME_ENUM.dark;
  return (
    <div style={{ background: isDarkTheme ? "black" : "white" }}>
      {children}
    </div>
  );
};

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeWrapper;
