import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, S1_1 } from "../../../ui";

type isActive = { $isActive: boolean };

const StyledCustomLink = styled(Link)<isActive>`
  ${S1_1};
  color: ${({ $isActive }) => ($isActive ? Color.Primary : Color.Secondary)};
`;

export { StyledCustomLink };
