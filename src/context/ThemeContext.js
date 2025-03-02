import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const initialState = "LIGHT"

export const THEME_ENUM = {
    dark: "DARK",
    light: "LIGHT"
}
  
export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? initialState);

    const getTheme = () => {
        return theme;
    };

    const changeTheme = (newTheme) => {
        let isSuccess = false
        Object.entries(THEME_ENUM).forEach(([key, value]) => {
            if(value === newTheme) {
                isSuccess = true
                setTheme(newTheme)
                localStorage.setItem('theme', newTheme);
            }
        });
        return isSuccess
    };

    return (
        <ThemeContext.Provider value={{ getTheme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};