import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { ROUTE } from "../../../routes";

export const RequareAuth = () => {
  const { isAuth } = useAuth(); // приходят извне, не из хука, а из данных

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
