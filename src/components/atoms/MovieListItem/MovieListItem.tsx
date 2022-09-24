import { ROUTE } from "routes";
import { IMovie } from "types/types";
import { Poster, StyledMovieListItem, Title } from "./styles";

interface IProps {
  movie: IMovie;
}

export const MovieListItem = ({ movie }: IProps) => {
  const { title, poster, imdbID } = movie;

  return (
    <StyledMovieListItem to={`${ROUTE.MOVIE}${imdbID}`}>
      <Poster src={poster} alt="poster is still in development" />
      <Title>{title}</Title>
    </StyledMovieListItem>
  );
};
