import styled from "styled-components";
import { Color, Media } from "ui";

const StyledBurgerMenu = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  min-width: 56px;
  border-radius: 10px;
  background: ${Color.Primary};

  ${Media.SM} {
    position: absolute;
    right: 0px;
    top: 32px;
  }
`;

export { StyledBurgerMenu };
