import React from "react";
import { Link } from "react-router-dom";
import { LogoIconLight, LogoIconDark } from "../../assets";
import { ROUTE } from "../../routes";
import { SearchInput, UserEmblem } from "../../components";
// import { UserEmblem } from "../UserEmblem/UserEmblem";
import { Wrapper } from "./styles";
import { useTheme } from "../../hooks";

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
