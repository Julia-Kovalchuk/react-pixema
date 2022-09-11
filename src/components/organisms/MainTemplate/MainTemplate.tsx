import React from "react";
import { Outlet } from "react-router-dom";
import { AsideNav, Navbar } from "../..";
import { Container, Wrapper } from "./styles";

export const MainTemplate = () => {
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
