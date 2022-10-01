import React, { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { AsideNav, Navbar } from "../..";
import { Container, Wrapper } from "./styles";

export const MainTemplate = () => {
  const { themeMode } = useAppSelector(getUserInfo);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <AsideNav />
        <Outlet />
      </Container>
    </Wrapper>
  );
};
