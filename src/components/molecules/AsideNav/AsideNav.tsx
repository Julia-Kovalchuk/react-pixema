import React from "react";
import { ROUTE } from "../../../routes";
import { Customlink, Footer } from "../..";
import { NavList, StyledAsideNav, StyledIcon } from "./styles";
import {
  FavoritesIcon,
  HomeIcon,
  SettingsIcon,
  TrendsIcon,
} from "../../../assets";

export const AsideNav = () => {
  return (
    <StyledAsideNav>
      <NavList>
        <li>
          <Customlink to={ROUTE.HOME}>
            <StyledIcon>
              <HomeIcon />
            </StyledIcon>{" "}
            Home
          </Customlink>
        </li>
        <li>
          <Customlink to={ROUTE.TRENDS}>
            <StyledIcon>
              <TrendsIcon />
            </StyledIcon>{" "}
            Trends
          </Customlink>
        </li>
        <li>
          <Customlink to={ROUTE.FAVORITES}>
            <StyledIcon>
              <FavoritesIcon />
            </StyledIcon>{" "}
            Favorites
          </Customlink>
        </li>
        <li>
          <Customlink to={ROUTE.SETTINGS}>
            <StyledIcon>
              {" "}
              <SettingsIcon />{" "}
            </StyledIcon>
            Settings
          </Customlink>
        </li>
      </NavList>
      <Footer />
    </StyledAsideNav>
  );
};
