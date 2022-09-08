import styled from "styled-components";
import { Color } from "../../ui/colors";

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  position: sticky;
  top: 0;
  padding-top: 40px;
  padding-bottom: 56px;
  background: ${Color.Theme_Black};
  transition: all 0.7s;
`;

export { Wrapper };
