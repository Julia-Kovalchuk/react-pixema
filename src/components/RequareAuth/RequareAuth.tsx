import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "../../routes";

export const RequareAuth = () => {
  const isAuth = true; // приходят извне, не + по дефолту

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
