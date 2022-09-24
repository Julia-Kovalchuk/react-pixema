import { ROUTE } from "../../../routes";
import { Customlink } from "../..";
import { Copyright, NavList, StyledAsideNav, StyledIcon } from "./styles";
import {
  FavoritesIcon,
  HomeIcon,
  SettingsIcon,
  TrendsIcon,
} from "../../../assets";

export const AsideNav = () => {
  // TODO: разобратьс с li
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
          <Customlink to={ROUTE.NEW}>
            <StyledIcon>
              <TrendsIcon />
            </StyledIcon>{" "}
            New
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
      <Copyright>@All Rights Reserved</Copyright>
    </StyledAsideNav>
  );
};
