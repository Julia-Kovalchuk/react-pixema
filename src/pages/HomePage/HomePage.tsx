import React, { useEffect } from "react";
import { fetchMovies } from "store/feautures/moviesSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getMovies } from "store/selectors/movieSelectors";
import { transformMoviesAPI } from "utils/transformMoviesAPI";
import { MoviesList } from "../../components";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, movies } = useAppSelector(getMovies);

  const transformedMovies = transformMoviesAPI(movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <MoviesList
      movies={transformedMovies}
      error={error}
      isLoading={isLoading}
    />
  );
  // button
};
