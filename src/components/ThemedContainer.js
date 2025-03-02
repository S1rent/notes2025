import React from "react";
import { THEME_ENUM, useTheme } from "../context/ThemeContext";

const ThemedContainer = ({ children, className, ...props }) => {
  const {getTheme} = useTheme();
  return (
    <div {...props} className={`container text-center gap-4 justify-content-center ${getTheme() === THEME_ENUM.dark ? "bg-black" : "bg-white"} ${className}`}>
      {children}
    </div>
  );
};

export default ThemedContainer;
