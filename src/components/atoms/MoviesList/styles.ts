import styled from "styled-components";
import { Media } from "ui";
import { Loading } from "../Loading/Loading";

const StyledMovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
  padding-top: 10px;

  ${Media.MD} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
    padding-top: 0px;
  }

  ${Media.SM} {
    grid-template-columns: 1fr;
  }
`;

const StyledLoading = styled(Loading)`
  background: none;
  font-size: 50px;

  ${Media.SM} {
    font-size: 40px;
  }
`;

export { StyledMovieList, StyledLoading };
