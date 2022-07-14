import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../routes";

const AppRouter = () => {
  const mappedPublicRoutes = publicRoutes.map(({ path, Component }) => {
    console.log(path, Component);
    return <Route key={path} path={path} element={<Component />}></Route>;
  });
  return <Routes>{mappedPublicRoutes}</Routes>;
};

export default AppRouter;
