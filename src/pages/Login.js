import React, { useEffect } from "react";
import { THEME_ENUM, useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { useLoading } from "../context/LoadingContext";
import { useAuth } from "../context/AuthContext";
import {
  getLocalizedStrings,
  LOCALIZATION_STRINGS_ENUM,
} from "../utils/localization";
import { getAccessToken, login, putAccessToken } from "../utils/network-data";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const isLoggedIn = (getAccessToken() ?? "").trim() !== "";

  const { setLoading } = useLoading();
  const { setUserAuth, getAuth } = useAuth();

  const { getTheme } = useTheme();
  const isDarkTheme = getTheme() === THEME_ENUM.dark;

  const { getLanguage } = useLanguage();
  const currentLang = getLanguage();

  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    setLoading(true);

    const loginResponse = await login(data);
    const accessToken = loginResponse.data.accessToken;
    putAccessToken(accessToken);
    setUserAuth({ ...getAuth(), accessToken: accessToken });
    navigate("/");

    setLoading(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <div className="container" style={{ paddingTop: "5.5rem", minHeight: 800 }}>
      <h1
        className={`text-2xl font-bold ${
          isDarkTheme ? "text-white" : "text-black"
        } my-5`}
      >
        {getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.login, currentLang)}
      </h1>
      <LoginForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Login;
