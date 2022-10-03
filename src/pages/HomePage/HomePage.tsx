import React, { useEffect } from "react";
import { createNextPage, fetchMovies } from "store/feautures";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getMovies } from "store/selectors";
import { MoviesList, Spiner } from "components";
import { ROUTE } from "routes/routes";
import { useMatch } from "react-router-dom";
import { Container, ShowMoreButton } from "./styles";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, movies, page } = useAppSelector(getMovies);
  const isHomePage = useMatch(ROUTE.HOME);

  if (!isHomePage) dispatch(createNextPage(false));

  useEffect(() => {
    dispatch(fetchMovies({ page }));
  }, [dispatch, page]);

  const handleClick = () => {
    dispatch(createNextPage(true));
  };

  //TODO: добавить Show more на new. как сделать чтобы не улетало наверх??

  return (
    <Container>
      <MoviesList movies={movies} error={error} isLoading={isLoading} />
      {!isLoading && !error && (
        <ShowMoreButton onClick={handleClick}>
          Show more <Spiner />{" "}
        </ShowMoreButton>
      )}
    </Container>
  );
};
