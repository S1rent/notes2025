import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { useAuth } from "../context/AuthContext";
import { getUserLogged } from "../utils/network-data";

const AuthMiddleware = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { getAuth, setUserAuth } = useAuth();
  const authenticatedUser = getAuth();

  useEffect(() => {
    if ((authenticatedUser?.accessToken ?? "") !== "") {
      setIsLoggedIn(true);
      getUserData()
    } else {
      setIsLoggedIn(false);
    }
  }, [authenticatedUser]);

  const getUserData = async() => {
    const result = await getUserLogged()
    setUserAuth({
      ...getAuth(), 
      id: result?.data?.[0]?.id ?? "",
      name: result?.data?.[0]?.name ?? "",
      email: result?.data?.[0]?.email ?? ""
    })
  }

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
