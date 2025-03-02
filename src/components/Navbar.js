import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import SunIcon from "../assets/SunIcon";
import { Snackbar } from "@mui/material";
import { useState } from "react";
import LanguageIcon from "../assets/LanguageIcon";
import LogoutIcon from "../assets/LogoutIcon";
import WhiteLogoutIcon from "../assets/WhiteLogoutIcon";
import { LANGUAGE_ENUM, useLanguage } from "../context/LanguageContext";
import { THEME_ENUM, useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import MoonIcon from "../assets/MoonIcon";
import WhiteLanguageIcon from "../assets/WhiteLanguageIcon";
import {
  getLocalizedStrings,
  LOCALIZATION_STRINGS_ENUM,
} from "../utils/localization";

const Header = () => {
  const { getAuth, setUserAuth } = useAuth();
  const isLoggedIn = (getAuth()?.accessToken ?? "").trim() !== "";

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const { changeLanguage, getLanguage } = useLanguage();
  const { changeTheme, getTheme } = useTheme();

  const currentTheme = getTheme();
  const isDarkTheme = currentTheme === THEME_ENUM.dark;

  const currentLang = getLanguage();

  const handleLogout = () => {
    setUserAuth({ accessToken: "" })
    localStorage.removeItem("accessToken");
  }

  return (
    <header
      className={`navbar navbar-expand-lg navbar-light ${
        isDarkTheme ? "bg-black" : "bg-white"
      } shadow-sm fixed-top`}
    >
      <div className="container-xxl">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <h1
            style={{
              backgroundColor: "#923cb5",
              backgroundImage: `linear-gradient(147deg, #923cb5 0%, ${
                isDarkTheme ? "white" : "#000000"
              } 74%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 900,
            }}
          >
            Philip Indra Prayitno
          </h1>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-2" style={{ alignItems: "center" }}>
            <li
              className="nav-item"
              style={{ cursor: "pointer" }}
              onClick={() => {
                const currentTheme = getTheme();
                const result = changeTheme(
                  currentTheme === THEME_ENUM.dark
                    ? THEME_ENUM.light
                    : THEME_ENUM.dark
                );
                if (result) {
                  setIsOpen(true);
                }
              }}
            >
              {isDarkTheme ? (
                <MoonIcon width={24} height={24} />
              ) : (
                <SunIcon width={32} height={32} />
              )}
            </li>
            <li
              className="nav-item"
              style={{ cursor: "pointer" }}
              onClick={() => {
                const currentLang = getLanguage();
                const result = changeLanguage(
                  currentLang === LANGUAGE_ENUM.english
                    ? LANGUAGE_ENUM.indonesia
                    : LANGUAGE_ENUM.english
                );
                if (result) {
                  setIsOpenLanguage(true);
                }
              }}
            >
              {isDarkTheme ? (
                <WhiteLanguageIcon width={32} height={32} />
              ) : (
                <LanguageIcon width={32} height={32} />
              )}
            </li>
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      isDarkTheme ? "text-light" : "text-dark"
                    }`}
                    to="/create"
                  >
                    {getLocalizedStrings(
                      LOCALIZATION_STRINGS_ENUM.navBarCreate,
                      currentLang
                    )}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      isDarkTheme ? "text-light" : "text-dark"
                    }`}
                    to="/archive"
                  >
                    {getLocalizedStrings(
                      LOCALIZATION_STRINGS_ENUM.navBarArchive,
                      currentLang
                    )}
                  </Link>
                </li>
              </>
            )}

            {isLoggedIn && (
              <li
                className="nav-item d-flex align-items-center"
                style={{ cursor: "pointer" }}
                onClick={handleLogout}
              >
                {isDarkTheme ? (
                  <WhiteLogoutIcon width={32} height={32} />
                ) : (
                  <LogoutIcon width={32} height={32} />
                )}
                <h6 className={`m-0 ${isDarkTheme ? "text-white": "text-black"}`} style={{ paddingLeft: '0.5rem' }}>{getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.logout, currentLang)}</h6>
              </li>
            )}
          </ul>
        </div>
      </div>

      <Snackbar
        open={isOpen}
        autoHideDuration={1500}
        message="Theme successfully switched."
        onClose={() => {
          setIsOpen(false);
        }}
      />
      <Snackbar
        open={isOpenLanguage}
        autoHideDuration={1500}
        message="Language successfully switched."
        onClose={() => {
          setIsOpenLanguage(false);
        }}
      />
    </header>
  );
};

export default Header;
