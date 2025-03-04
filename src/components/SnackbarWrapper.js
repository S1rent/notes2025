import React from "react";
import { Snackbar } from "@mui/material";
import { useSnackbar } from "../context/SnackbarContext";
import PropTypes from "prop-types";

const SnackbarWrapper = ({ children }) => {
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

SnackbarWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SnackbarWrapper;
