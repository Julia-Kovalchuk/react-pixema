/* eslint-disable react-hooks/exhaustive-deps */
import { MoviesList, ShowMoreButton } from "components";
import { useEffect } from "react";
import { createNextPageNewMovies, fetchNewMovies } from "store/feautures";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getNewMovies } from "store/selectors";
import { Container } from "./styles";

export const NewPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, newMovies, page } = useAppSelector(getNewMovies);
  const isNew = true;

  useEffect(() => {
    dispatch(fetchNewMovies({ page }));
  }, [dispatch, page]);

  useEffect(() => {
    isNew && dispatch(createNextPageNewMovies(false));
  }, [dispatch]); // здесь убрала ! так как тут другая система про isCurrentPage

  const handleClick = () => {
    dispatch(createNextPageNewMovies(true));
  };

  return (
    <Container>
      <MoviesList
        movies={newMovies}
        error={error}
        isLoading={isLoading}
        isNew={isNew}
      />
      {!isLoading && !error && <ShowMoreButton onClick={handleClick} />}
    </Container>
  );
};
