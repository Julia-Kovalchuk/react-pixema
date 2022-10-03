/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
  createNextSearchPage,
  deleteAllParams,
  fetchMoviesSearch,
} from "store/feautures";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getMoviesSearch } from "store/selectors";
import { EmptySearch, MoviesList, ShowMoreButton } from "components";
import { ROUTE } from "routes/routes";
import { useMatch } from "react-router-dom";
import { Container } from "./styles";

export const SearchPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, movies, searchParams } =
    useAppSelector(getMoviesSearch);
  const isSearchPage = useMatch(ROUTE.SEARCH);

  useEffect(() => {
    if (searchParams.title || searchParams.type || searchParams.year)
      dispatch(fetchMoviesSearch(searchParams));
  }, [searchParams]);

  useEffect(() => {
    !isSearchPage && dispatch(deleteAllParams());
  }, [dispatch, isSearchPage]);

  const handleClick = () => {
    dispatch(createNextSearchPage(true));
  };

  return (
    <Container>
      {movies.length !== 0 ? (
        <MoviesList movies={movies} error={error} isLoading={isLoading} />
      ) : (
        <EmptySearch />
      )}
      {!isLoading && !error && <ShowMoreButton onClick={handleClick} />}
    </Container>
  );
};
