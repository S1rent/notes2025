import React from "react";
import { useNavigate } from 'react-router-dom';
import { THEME_ENUM, useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedStrings, LOCALIZATION_STRINGS_ENUM } from "../utils/localization";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  const {getTheme} = useTheme();
  const isDarkTheme = getTheme() === THEME_ENUM.dark

  const {getLanguage} = useLanguage();
  const currentLang = getLanguage();

  const today = new Date()
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    const newId = new Date().getTime()

    navigate('/');
  };

  return (
    <div className="container" style={{ paddingTop: '5.5rem', minHeight: 800 }}>
      <h1 className={`text-2xl font-bold ${isDarkTheme ? "text-white" : 'text-black'} my-5`}>{getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.register, currentLang)}</h1>
      <RegisterForm onSubmit={handleFormSubmit} />
    </div>
    

  );
};

export default Register;