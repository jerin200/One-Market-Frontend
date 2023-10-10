import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import Login from "../Authentication/LogIn/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import { path } from "./Routes";

const RouterContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route element={<Login />} path={path.home}></Route>
          <Route element={<Login />} path={path.login}></Route>
          <Route element={<SignUp />} path={path.sign_up}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterContainer;
