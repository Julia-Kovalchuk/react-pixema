import { MoviesListFavorites } from "components";
import { useAppSelector } from "store/hooks/hooks";
import { getFavorites } from "store/selectors/favoritesSelectors";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getFavorites);

  return <MoviesListFavorites movies={favorites} />;
  // button
};

//добавить модалок для взаимодействия, добавить кнопки для удаления из fav,
