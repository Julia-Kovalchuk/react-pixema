/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
  clearSearchMovies,
  createNextSearchPage,
  deleteAllParams,
  fetchMoviesSearch,
  resetTypeParam,
  resetYearParam,
} from "store/feautures";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getMoviesSearch } from "store/selectors";
import {
  Badge,
  EmptySearch,
  Loading,
  MoviesList,
  ShowMoreButton,
} from "components";
import { ROUTE } from "routes/routes";
import { useMatch, useNavigate } from "react-router-dom";
import { BadgeContainer, Container } from "./styles";

export const SearchPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, movies, searchParams, isMoreLoading } =
    useAppSelector(getMoviesSearch);
  const isSearchPage = useMatch(ROUTE.SEARCH);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.title || searchParams.type || searchParams.year)
      dispatch(fetchMoviesSearch(searchParams));
  }, [searchParams]);

  useEffect(() => {
    if (isSearchPage) dispatch(clearSearchMovies());
    if (!isSearchPage) dispatch(deleteAllParams());
  }, [isSearchPage]);

  const handleClick = () => {
    dispatch(createNextSearchPage(true));
  };

  const handleResetTitle = () => {
    dispatch(deleteAllParams());
    dispatch(clearSearchMovies());
    navigate(ROUTE.HOME);
  };

  const handleResetType = () => {
    dispatch(resetTypeParam());
    dispatch(clearSearchMovies());
    createNextSearchPage(false);
  };

  const handleResetYear = () => {
    dispatch(resetYearParam());
    dispatch(clearSearchMovies());
    createNextSearchPage(false);
  };

  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <BadgeContainer>
        {searchParams.title && (
          <Badge text={searchParams.title} onClick={handleResetTitle} />
        )}
        {searchParams.type && (
          <Badge text={searchParams.type} onClick={handleResetType} />
        )}
        {searchParams.year && (
          <Badge
            text={
              +searchParams.year === currentYear ? "new" : searchParams.year
            }
            onClick={handleResetYear}
          />
        )}
      </BadgeContainer>

      {isLoading ? (
        <Loading />
      ) : movies.length !== 0 ? (
        <>
          <MoviesList movies={movies} error={error} isLoading={isLoading} />
          {!isLoading && !error && (
            <ShowMoreButton
              onClick={handleClick}
              isMoreLoading={isMoreLoading}
            />
          )}
        </>
      ) : (
        <EmptySearch />
      )}
    </Container>
  );
};
