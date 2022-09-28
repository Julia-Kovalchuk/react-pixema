import { MouseEvent } from "react";
import { FavoritesButtonIcon } from "assets";
import { NotFoundBox } from "components";
import { ROUTE } from "routes/routes";
import { useAppDispatch } from "store/hooks/hooks";
import { IMovieDetails } from "types/types";
import {
  Container,
  FavoritesButton,
  Poster,
  Rating,
  StyledMovieListItem,
  Title,
} from "./styles";
import { removeFavorites } from "store/feautures/favoritesSlice";

interface IProps {
  movie: IMovieDetails;
}

export const MovieListItemFavorites = ({ movie }: IProps) => {
  const { title, poster, id, imdbRating } = movie;
  const dispatch = useAppDispatch();

  const handleAddFavorites = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    dispatch(removeFavorites(id));
  };

  return (
    <Container>
      <StyledMovieListItem to={`${ROUTE.MOVIE}${id}`}>
        {poster === "N/A" ? (
          <NotFoundBox />
        ) : (
          <Poster src={poster} alt="poster is still in development" />
        )}
        <Title>{title}</Title>
      </StyledMovieListItem>
      <FavoritesButton type="button" onClick={handleAddFavorites}>
        <FavoritesButtonIcon />
      </FavoritesButton>
      <Rating>{imdbRating}</Rating>
    </Container>
  );
};