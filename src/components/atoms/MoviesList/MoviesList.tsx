import { ErrorMessage, LoadingMovies, MovieListItem } from "../..";
import { StyledMovieList } from "./styles";
import { IMovie } from "types/types";

interface IProps {
  isLoading?: boolean;
  error?: string | null;
  movies: IMovie[];
}

export const MoviesList = ({ isLoading, error, movies }: IProps) => {
  if (isLoading) {
    return <LoadingMovies />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
  // Ошибку стилизовать

  return (
    <StyledMovieList>
      {movies.map((movie) => {
        return <MovieListItem movie={movie} key={movie.imdbID} />;
      })}
    </StyledMovieList>
  );
};
