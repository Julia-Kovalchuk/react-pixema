import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, H4 } from "../../../ui";

type isActive = { $isActive: boolean };

const StyledCustomLink = styled(Link)<isActive>`
  display: flex;
  ${H4};
  color: ${({ $isActive }) => ($isActive ? Color.Primary : Color.Secondary)};
  fill: ${({ $isActive }) => ($isActive ? Color.Primary : Color.Secondary)};

  &:hover {
    color: ${Color.Primary_Light};
    fill: ${Color.Primary_Light};
  }

  &:active {
    color: ${Color.Primary};
    fill: ${Color.Primary};
  }

  &:disabled {
    color: ${Color.Light};
    fill: ${Color.Light};
  }
`;

export { StyledCustomLink };
