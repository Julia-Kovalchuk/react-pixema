import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Media } from "../../../ui";

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 300px 3fr 1fr;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 56px;
  background: ${Color.ThemeBlack};
  transition: all 0.7s;

  ${Media.MD} {
    display: flex;
    max-width: 100%;
    padding-bottom: 48px;
  }
`;

const StyledLink = styled(Link)`
  ${Media.MD} {
    margin-right: auto;
  }

  ${Media.SM} {
    position: absolute;
    top: 41px;
    left: 0;
  }
`;

export { Wrapper, StyledLink };
