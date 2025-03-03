import React from "react";
import { Snackbar } from "@mui/material";
import { useSnackbar } from "../context/SnackbarContext";

const ThemeWrapper = ({ children }) => {
  const { hideSnackbar, snackbarValue } = useSnackbar();
  return (
    <div>
      {children}
      <Snackbar
        open={!snackbarValue.isHidden}
        autoHideDuration={1500}
        message={snackbarValue.message}
        onClose={() => {
          hideSnackbar();
        }}
      />
    </div>
  );
};

export default ThemeWrapper;
