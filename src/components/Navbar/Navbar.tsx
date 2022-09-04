import React from "react";
import { ReactComponent as Logo } from "../../assets/logo-light.svg"; //TODO изменение лого от темы (вынести в сss?)
import { Avatar } from "../Avatar/Avatar";
import { SearchInput } from "../SearchInput/SearchInput";

export const Navbar = () => {
  return (
    <>
      <Logo />
      <SearchInput />
      <Avatar />
      {/* что с этим? */}
      <p>User name</p>
      <p>arrow</p>
      <></>
    </>
  );
};
