import React from "react";
import { Outlet } from "react-router-dom";
import { AsideNav, Navbar } from "../../components";
// import { Navbar } from "../Navbar/Navbar";
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
