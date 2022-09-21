import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, H4 } from "../../../ui";

const StyledMovieListItem = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: inherit;

  &:hover {
    color: ${Color.Primary};
  }
`;

const Poster = styled.img`
  width: 100%;
  height: 357px;
  border-radius: 20px;
  margin-bottom: 10px;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    scale: 1.05;
  }
`;

const Title = styled.h2`
  ${H4}
  color: inherit;
`;

export { StyledMovieListItem, Poster, Title };
