import React from "react";
import { THEME_ENUM, useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import {
  getLocalizedStrings,
  LOCALIZATION_STRINGS_ENUM,
} from "../utils/localization";
import NotFoundIcon from "../assets/NotFoundIcon";

const NotFound = () => {
  const { getTheme } = useTheme();
  const isDarkTheme = getTheme() === THEME_ENUM.dark;
  const { getLanguage } = useLanguage();
  const currentLang = getLanguage();

  return (
    <div
      className="container text-center d-flex w-100 align-items-center justify-content-center"
      style={{ paddingTop: "5.5rem", minHeight: 800 }}
    >
      <div>
        <NotFoundIcon width={480} height={360} />
        <h1
          className={`text-2xl font-bold ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
        >
          {getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.error404, currentLang)}
        </h1>
        <h5
          className={`text-2xl font-bold ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
        >
          {getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.notFound, currentLang)}
        </h5>
      </div>
    </div>
  );
};

export default NotFound;
