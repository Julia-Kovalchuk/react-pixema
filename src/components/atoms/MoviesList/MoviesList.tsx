import { ErrorMessage, LoadingMovies, MovieListItem } from "../..";
import { StyledMovieList } from "./styles";
import { IMovie } from "types/types";
import { useWindowSize } from "hooks";
import { Breackpoint } from "ui";

interface IProps {
  isLoading?: boolean;
  error?: string | null;
  movies: IMovie[];
  isNew?: boolean;
}

export const MoviesList = ({ isLoading, error, movies, isNew }: IProps) => {
  const { screenWidth } = useWindowSize();

  const getCardСount = (): number => {
    if (screenWidth) {
      if (screenWidth > 1900) {
        return 6;
      } else if (screenWidth > 1700) {
        return 5;
      } else if (screenWidth > 1200) {
        return 4;
      } else if (screenWidth > 800) {
        return 3;
      } else if (screenWidth > Breackpoint.SM) {
        return 2;
      }
    }
    return 1;
  };

  if (isLoading) {
    return <LoadingMovies />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
  // Ошибку стилизовать

  return (
    <StyledMovieList $CardСount={getCardСount()}>
      {movies.map((movie) => {
        return <MovieListItem movie={movie} key={movie.imdbID} isNew={isNew} />;
      })}
    </StyledMovieList>
  );
};
