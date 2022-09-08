import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIconLight } from "../../assets/logo/logo-light.svg";
import { ReactComponent as LogoIconDark } from "../../assets/logo/logo-dark.svg";
import { ROUTE } from "../../routes";
import { SearchInput } from "../SearchInput/SearchInput";
import { UserEmblem } from "../UserEmblem/UserEmblem";
import { Wrapper } from "./styles";
import { useTheme } from "../../hooks/useTheme";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <Wrapper>
      <Link to={ROUTE.HOME}>
        {theme === "dark" ? <LogoIconDark /> : <LogoIconLight />}
      </Link>
      <SearchInput />
      <UserEmblem />
    </Wrapper>
  );
};
