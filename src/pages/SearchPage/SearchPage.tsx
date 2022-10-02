import { useEffect } from "react";
import { fetchMoviesSearch } from "store/feautures/moviesSearchSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getMoviesSearch } from "store/selectors/movieSearchSelectors";
import { EmptySearch, MoviesList } from "../../components";

export const SearchPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, movies, searchParams } =
    useAppSelector(getMoviesSearch);

  useEffect(() => {
    if (searchParams.title || searchParams.type || searchParams.year)
      dispatch(fetchMoviesSearch(searchParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return movies.length !== 0 ? (
    <MoviesList movies={movies} error={error} isLoading={isLoading} />
  ) : (
    <EmptySearch />
  );

  // TODO : добавить ошибку и когда ничего не находит
  // button
};
