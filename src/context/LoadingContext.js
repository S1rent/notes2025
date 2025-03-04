import PropTypes from "prop-types";
import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext();
const initialState = false;

export const useLoading = () => {
  return useContext(LoadingContext);
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(initialState);

  const setLoading = (newState) => {
    setIsLoading(newState);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

LoadingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
