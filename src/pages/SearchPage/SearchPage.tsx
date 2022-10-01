import { EmptySearch } from "assets";
import { useEffect } from "react";
import { useMatch } from "react-router-dom";
import { ROUTE } from "routes/routes";
import {
  fetchMoviesSearch,
  updateYearParam,
} from "store/feautures/moviesSearchSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getMoviesSearch } from "store/selectors/movieSearchSelectors";
import { MoviesList } from "../../components";
import { Container, Wrapper, Text, CustomLink } from "./styles";

export const SearchPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, movies, searchParams } =
    useAppSelector(getMoviesSearch);
  const isNewPage = useMatch(ROUTE.NEW);
  const currentYear = new Date().getFullYear().toString();

  useEffect(() => {
    if (isNewPage) dispatch(updateYearParam(currentYear));
    if (searchParams.title || searchParams.type || searchParams.year)
      dispatch(fetchMoviesSearch(searchParams));
  }, [searchParams]);

  return movies.length !== 0 ? (
    <MoviesList movies={movies} error={error} isLoading={isLoading} />
  ) : (
    <Wrapper>
      <Container>
        <EmptySearch />
      </Container>
      <Text>
        Try again or choose something from{" "}
        <CustomLink to={ROUTE.NEW}> the new movies</CustomLink>
      </Text>
    </Wrapper>
  );

  // TODO : добавить ошибку и когда ничего не находит
  // button
};
