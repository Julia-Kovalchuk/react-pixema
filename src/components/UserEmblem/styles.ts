import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";
import arrow from "../../assets/icons/arrow-down.svg";
import { S1_3 } from "../../ui/typography";

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
  background: no-repeat url(${arrow});
  background-position: center;
  height: 20px;
  width: 20px;

  ${Media.MD} {
    display: none;
  }
`;

export { StyledUserEmblem, UserName, UserInfo, ArrowDown };
