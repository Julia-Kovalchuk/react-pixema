import React, { useEffect } from "react";
import { fetchMovies } from "../../../store/feautures/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { ErrorMessage, MovieListItem } from "../../../components";
import { getMovies } from "../../../store/selectors/movieSelectors";
import { StyledMovieList } from "./styles";
import { IMovieAPI } from "types/types";
import { LoadingMovies } from "components/atoms/LoadingMovies/LoadingMovies";

export const MoviesList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, movies } = useAppSelector(getMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (isLoading) {
    return <LoadingMovies />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <StyledMovieList>
      {movies.Search.map((movie: IMovieAPI) => {
        return <MovieListItem movie={movie} key={movie.imdbID} />;
      })}
    </StyledMovieList>
  );
};
