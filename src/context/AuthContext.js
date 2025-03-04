import PropTypes from "prop-types";
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
  const localSavedAuthObject = localStorage.getItem("authObject");
  const [auth, setAuth] = useState(
    JSON.parse(localSavedAuthObject) ?? initialState
  );

  const getAuth = () => {
    return auth;
  };

  const setUserAuth = (newUserAuth) => {
    setAuth({ ...auth, ...newUserAuth });
    localStorage.setItem(
      "authObject",
      JSON.stringify({ ...auth, ...newUserAuth })
    );
  };

  return (
    <AuthContext.Provider value={{ getAuth, setUserAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
