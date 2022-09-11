import styled from "styled-components";
import { Color, Media, S1_3 } from "../../../ui";

const StyledButton = styled.button`
  width: 100%;
  padding-top: 17px;
  padding-bottom: 15px;
  margin-top: 16px;
  /* margin этот проследить */

  background-color: ${Color.Primary};
  border-radius: 10px;

  ${S1_3};
  color: ${Color.White};

  transition: all 0.3s;

  cursor: pointer;

  &:hover {
    background-color: ${Color.Primary_Light};
  }

  &:disabled {
    color: ${Color.Light};
    background-color: ${Color.Secondary};
  }

  &:active {
    box-shadow: ${Color.Light} 0px 5px 29px 0px;
  }

  &${Media.MD} {
    padding: 16px;
  }
`;

export { StyledButton };
