import styled from "styled-components";
import { S1_1 } from "../../../ui";

const StyledMovieListItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Poster = styled.img`
  width: 100%;
  height: 357px;
  border-radius: 20px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  ${S1_1}
`;

// add hover

export { StyledMovieListItem, Poster, Title };
