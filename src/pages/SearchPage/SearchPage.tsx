/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { createNextSearchPage, fetchMoviesSearch } from "store/feautures";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getMoviesSearch } from "store/selectors";
import { EmptySearch, Loading, MoviesList, ShowMoreButton } from "components";
import { Container } from "./styles";

export const SearchPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, movies, searchParams, isMoreLoading } =
    useAppSelector(getMoviesSearch);

  useEffect(() => {
    if (searchParams.title || searchParams.type || searchParams.year)
      dispatch(fetchMoviesSearch(searchParams));
  }, [searchParams]);

  const handleClick = () => {
    dispatch(createNextSearchPage(true));
  };

  return (
    <Container>
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
