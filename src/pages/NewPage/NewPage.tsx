import { MoviesList } from "components";
import React, { useEffect } from "react";
import { fetchNewMovies } from "store/feautures/newMoviesSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getNewMovies } from "store/selectors/newMovieSelectors";
import { transformMoviesAPI } from "utils/transformMoviesAPI";

export const NewPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, newMovies } = useAppSelector(getNewMovies);

  const transformedMovies = transformMoviesAPI(newMovies);

  useEffect(() => {
    dispatch(fetchNewMovies());
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
