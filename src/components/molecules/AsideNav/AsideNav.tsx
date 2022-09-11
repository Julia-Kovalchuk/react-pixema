import React from "react";
import { ROUTE } from "../../../routes";
import { Customlink, Footer } from "../..";
import { NavList, StyledAsideNav } from "./styles";

export const AsideNav = () => {
  return (
    <StyledAsideNav>
      <NavList>
        <li>
          <Customlink to={ROUTE.HOME}>Home</Customlink>
        </li>
        <li>
          <Customlink to={ROUTE.TRENDS}>Trends</Customlink>
        </li>
        <li>
          <Customlink to={ROUTE.FAVORITES}>Favorites</Customlink>
        </li>
        <li>
          <Customlink to={ROUTE.SETTINGS}>Settings</Customlink>
        </li>
      </NavList>
      <Footer />
    </StyledAsideNav>
  );
};
