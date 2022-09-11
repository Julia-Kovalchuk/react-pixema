import styled from "styled-components";
import { Color, Media, S1_3 } from "../../../ui";
import { arrowDown } from "../../../assets";

const StyledUserEmblem = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;

  /* посмотреть все состояния */
`;

const UserName = styled.p`
  margin-left: 20px;
  ${S1_3}
  color: ${Color.White};

  ${Media.MD} {
    display: none;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Arrow = styled.div`
  height: 20px;
  width: 20px;
  background: no-repeat url(${arrowDown});
  background-position: center;

  ${Media.MD} {
    display: none;
  }
`;

export { StyledUserEmblem, UserName, UserInfo, Arrow };
