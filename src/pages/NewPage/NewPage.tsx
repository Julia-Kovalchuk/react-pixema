import { MoviesList } from "components";
import { useEffect } from "react";
import { fetchNewMovies } from "store/feautures";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getNewMovies } from "store/selectors";

export const NewPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, newMovies } = useAppSelector(getNewMovies);
  const isNew = true;

  useEffect(() => {
    dispatch(fetchNewMovies());
  }, [dispatch]);

  return (
    <MoviesList
      movies={newMovies}
      error={error}
      isLoading={isLoading}
      isNew={isNew}
    />
  );
  // button
};
