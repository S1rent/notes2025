import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { useAuth } from "../context/AuthContext";
import { getUserLogged } from "../utils/network-data";
import PropTypes from "prop-types";

const AuthMiddleware = ({ children }) => {
  const { getAuth, setUserAuth } = useAuth();
  const authenticatedUser = getAuth();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const result = await getUserLogged();
    setUserAuth({
      ...getAuth(),
      id: result?.data?.id ?? "",
      name: result?.data?.name ?? "",
      email: result?.data?.email ?? "",
    });
  };

  return (authenticatedUser?.accessToken ?? "") !== "" ? (
    <div>{children}</div>
  ) : (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

AuthMiddleware.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthMiddleware;
