import React from "react";
import { Avatar } from "../..";
import { Arrow, StyledUserEmblem, UserInfo, UserName } from "./styles";

export const UserEmblem = () => {
  return (
    <StyledUserEmblem>
      <UserInfo>
        <Avatar />
        <UserName>User name</UserName>
      </UserInfo>
      <Arrow />
    </StyledUserEmblem>
  );
};
