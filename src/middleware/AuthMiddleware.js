import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { useAuth } from "../context/AuthContext";

const AuthMiddleware = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { getAuth } = useAuth();
  const authenticatedUser = getAuth();

  useEffect(() => {
    if ((authenticatedUser?.accessToken ?? "") !== "") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [authenticatedUser]);

  return isLoggedIn ? (
    <div>{children}</div>
  ) : (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AuthMiddleware;
