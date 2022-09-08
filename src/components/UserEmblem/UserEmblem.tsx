import React from "react";
import { Avatar } from "../Avatar/Avatar";
import { ArrowDown, StyledUserEmblem, UserInfo, UserName } from "./styles";

export const UserEmblem = () => {
  return (
    <StyledUserEmblem>
      <UserInfo>
        <Avatar />
        <UserName>User name</UserName>
      </UserInfo>
      <ArrowDown />
    </StyledUserEmblem>
  );
};
