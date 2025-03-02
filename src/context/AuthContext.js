import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const initialState = {
  accessToken: "",
  id: "",
  name: "",
  email: "",
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const localSavedAuthToken = localStorage.getItem("accessToken");
  const [auth, setAuth] = useState(
    localSavedAuthToken
      ? { ...initialState, accessToken: localSavedAuthToken }
      : initialState
  );

  const getAuth = () => {
    return auth;
  };

  const setUserAuth = (newUserAuth) => {
    setAuth({ ...auth, ...newUserAuth });
  };

  return (
    <AuthContext.Provider value={{ getAuth, setUserAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
