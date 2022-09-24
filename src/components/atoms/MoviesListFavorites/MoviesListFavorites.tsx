import { StyledMovieList } from "./styles";
import { IMovieDetails } from "types/types";
import { MovieListItemFavorites } from "components";

interface IProps {
  movies: IMovieDetails[];
}

export const MoviesListFavorites = ({ movies }: IProps) => {
  return (
    <StyledMovieList>
      {movies.map((movie) => {
        return <MovieListItemFavorites movie={movie} key={movie.id} />;
      })}
    </StyledMovieList>
  );
};
