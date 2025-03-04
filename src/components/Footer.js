import React from "react";
import Wave from "react-wavify";
import { THEME_ENUM, useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { getTheme } = useTheme();
  const isDarkTheme = getTheme() === THEME_ENUM.dark;

  return (
    <Wave
      fill="url(#gradient)"
      style={{ height: 192, background: isDarkTheme ? "black" : "white" }}
    >
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="10%" stopColor="#923cb5" />
          <stop offset="90%" stopColor="#000" />
        </linearGradient>
      </defs>
    </Wave>
  );
};

export default Footer;
