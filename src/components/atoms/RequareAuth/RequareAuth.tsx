import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { ROUTE } from "../../../routes";

export const RequareAuth = () => {
  const { isAuth } = useAppSelector(getUserInfo);

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_UP} />;
};
