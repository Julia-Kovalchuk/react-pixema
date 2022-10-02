import { EmptySearch, MoviesListFavorites } from "components";
import { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import { ROUTE } from "routes/routes";
import { resetSortedFavorites } from "store/feautures/favoritesSlice";
import { useAppSelector } from "store/hooks/hooks";
import { getFavorites } from "store/selectors/favoritesSelectors";
import { IMovieDetails } from "types/types";
import { StyledEmptyIcon, Wrapper, Text, CustomLink } from "./styles";

export const FavoritesPage = () => {
  const { favorites, searchWord, sortedFavorites } =
    useAppSelector(getFavorites);
  const isFavoritesPage = useMatch(ROUTE.FAVORITES);

  const [favoritesValues, setFavoritesValues] =
    useState<IMovieDetails[]>(favorites);

  useEffect(() => {
    sortedFavorites.length !== 0
      ? setFavoritesValues(sortedFavorites)
      : setFavoritesValues(favorites);
  }, [favorites, sortedFavorites]);

  useEffect(() => {
    !isFavoritesPage && resetSortedFavorites();
  }, [isFavoritesPage]);

  // TODO одно условие летит, пересмотреть
  return searchWord ? (
    sortedFavorites.length !== 0 ? (
      <MoviesListFavorites movies={favoritesValues} />
    ) : (
      <EmptySearch />
    )
  ) : favorites.length !== 0 ? (
    <MoviesListFavorites movies={favoritesValues} />
  ) : (
    <Wrapper>
      <StyledEmptyIcon />
      <Text>
        You haven't added anything to your favorites yet. You might find
        something of interest <CustomLink to={ROUTE.HOME}>here</CustomLink>
      </Text>
    </Wrapper>
  );
};
// button
