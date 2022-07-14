import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { isAuth, email } = useAuth();
  console.log(isAuth);
  return isAuth && email ? (
    <div>{email}</div>
  ) : (
    <Navigate to="/tweets"></Navigate>
  );
};

export default Home;
