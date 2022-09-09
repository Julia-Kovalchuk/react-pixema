import styled from "styled-components";
import { Color, Media, S1_3 } from "../../ui";

const StyledUserEmblem = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;

  /* посмотреть все состояния */
`;

const UserName = styled.p`
  ${S1_3}
  margin-left: 20px;
  color: ${Color.White};

  ${Media.MD} {
    display: none;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ArrowDown = styled.div`
  background-position: center;
  height: 20px;
  width: 20px;

  ${Media.MD} {
    display: none;
  }
`;

export { StyledUserEmblem, UserName, UserInfo, ArrowDown };
