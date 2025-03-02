import React from "react";
import { THEME_ENUM, useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { useLoading } from "../context/LoadingContext";
import { getLocalizedStrings, LOCALIZATION_STRINGS_ENUM } from "../utils/localization";
import {login} from "../utils/network-data";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const {setLoading} = useLoading();

  const {getTheme} = useTheme();
  const isDarkTheme = getTheme() === THEME_ENUM.dark

  const {getLanguage} = useLanguage();
  const currentLang = getLanguage();

  const handleFormSubmit = async (data) => {
    setLoading(true)
    await login(data)
    setLoading(false)
  };  

  return (
    <div className="container" style={{ paddingTop: '5.5rem', minHeight: 800 }}>
      <h1 className={`text-2xl font-bold ${isDarkTheme ? "text-white" : 'text-black'} my-5`}>{getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.login, currentLang)}</h1>
      <LoginForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Login;