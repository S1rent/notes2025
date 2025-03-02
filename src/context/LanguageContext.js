import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();
const initialState = "EN"

export const LANGUAGE_ENUM = {
    english: "EN",
    indonesia: "ID"
}
  
export const useLanguage = () => {
    return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(initialState);

    const getLanguage = () => {
        return language;
    };

    const changeLanguage = (lang) => {
        let isSuccess = false
        Object.entries(LANGUAGE_ENUM).forEach(([key, value]) => {
            if(value === lang) {
                isSuccess = true
                setLanguage(lang)
            }
        });
        return isSuccess
    };

    return (
        <LanguageContext.Provider value={{ getLanguage, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};