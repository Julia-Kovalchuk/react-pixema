import { ROUTE } from "routes";
import { IMovieDetails } from "types/types";
import { Poster, StyledMovieListItem, Title } from "./styles";

interface IProps {
  movie: IMovieDetails;
}

export const MovieListItemFavorites = ({ movie }: IProps) => {
  const { title, poster, id } = movie;

  return (
    <StyledMovieListItem to={`${ROUTE.MOVIE}${id}`}>
      <Poster src={poster} alt="poster is still in development" />
      <Title>{title}</Title>
    </StyledMovieListItem>
    //TODO: add fav
  );
};
