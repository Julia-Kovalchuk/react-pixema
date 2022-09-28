import React, { useEffect } from "react";
import { fetchMovies } from "store/feautures/moviesSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getMovies } from "store/selectors/movieSelectors";
import { MoviesList } from "../../components";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, movies } = useAppSelector(getMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return <MoviesList movies={movies} error={error} isLoading={isLoading} />;
  // button
};
