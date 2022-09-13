import styled from "styled-components";
import { Loading } from "../../atoms/Loading/Loading";

const StyledMovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
`;

const StyledLoading = styled(Loading)`
  background: none;
  font-size: 50px;
`;

export { StyledMovieList, StyledLoading };
