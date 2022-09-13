import React, { useEffect } from "react";
import { fetchMovies } from "../../../store/feautures/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { IMovie } from "../../../types/types";
import { ErrorMessage, Loading, MovieListItem } from "../../../components";
import { getMovies } from "../../../store/selectors/movieSelectors";
import { StyledLoading, StyledMovieList } from "./styles";

export const MoviesList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, movies } = useAppSelector(getMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  console.log(movies);

  if (isLoading) {
    return <StyledLoading />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
  console.log(movies.Search);

  return (
    <StyledMovieList>
      {movies.Search.map((movie: IMovie) => {
        return <MovieListItem movie={movie} key={movie.imdbID} />;
      })}
    </StyledMovieList>
  );
};
