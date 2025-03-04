import PropTypes from "prop-types";
import React, { createContext, useContext, useState } from "react";

const SnackbarContext = createContext();
const initialState = {
  isHidden: true,
  message: "",
};

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};

export const SnackbarProvider = ({ children }) => {
  const [snackbarValue, setSnackbarValue] = useState(initialState);

  const showSnackbar = (message) => {
    setSnackbarValue({ message: message, isHidden: false });
  };

  const hideSnackbar = () => {
    setSnackbarValue({ ...snackbarValue, isHidden: true });
  };

  return (
    <SnackbarContext.Provider
      value={{ showSnackbar, hideSnackbar, snackbarValue }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

SnackbarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
