import React, { useEffect } from "react";
import { fetchMovies } from "../../../store/feautures/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { IMovie } from "../../../types/types";
import { ErrorMessage, Loading } from "../../../components";
import { getMovies } from "../../../store/selectors/movieSelectors";

export const MoviesList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, movies } = useAppSelector(getMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  console.log(movies);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
  console.log(movies["Search" as keyof IMovie[]]);

  // Ниже код лучше не смотреть. я так и не поняла как правильно достать данные

  // TODO: style, array
  return (
    <ul>
      {/* {movies["Search" as keyof IMovie[]].map((movie: {}) =>
        console.log(movie.Title)
      )} */}
    </ul>
  );
};
