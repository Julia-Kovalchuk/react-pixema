import styled from "styled-components";
import { Color, S1_3 } from "../../../ui";

const StyledErrorMessage = styled.p`
  margin-top: -22px;

  ${S1_3};
  font-weight: 400;
  color: ${Color.Error};
`;

export { StyledErrorMessage };
