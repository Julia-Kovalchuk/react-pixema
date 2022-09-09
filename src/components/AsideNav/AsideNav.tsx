import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { Footer } from "../../components";
import { NavList, StyledAsideNav } from "./styles";

export const AsideNav = () => {
  return (
    <StyledAsideNav>
      <NavList>
        <li>
          <Link to={ROUTE.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTE.TRENDS}>Trends</Link>
        </li>
        <li>
          <Link to={ROUTE.FAVORITES}>Favorites</Link>
        </li>
        <li>
          <Link to={ROUTE.SETTINGS}>Settings</Link>
        </li>
      </NavList>
      <Footer />
    </StyledAsideNav>
  );
};
