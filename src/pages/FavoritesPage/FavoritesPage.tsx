import { MoviesListFavorites } from "components";
import { ROUTE } from "routes/routes";
import { useAppSelector } from "store/hooks/hooks";
import { getFavorites } from "store/selectors/favoritesSelectors";
import { StyledEmptyIcon, Wrapper, Text, CustomLink } from "./styles";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getFavorites);

  if (favorites.length !== 0) {
    return <MoviesListFavorites movies={favorites} />;
  } else {
    return (
      <Wrapper>
        <StyledEmptyIcon />
        <Text>
          You haven't added anything to your favorites yet. You might find
          something of interest <CustomLink to={ROUTE.HOME}>here</CustomLink>
        </Text>
      </Wrapper>
    );
  }
};

// return  {favorites? (
//     <MoviesListFavorites movies={favorites} />
//   ) : (
//     <Container>
//       <EmptyIcon />
//   </Container>
//   )
// }

// button

//добавить модалок для взаимодействия, добавить кнопки для удаления из fav
