import { TrendsIcon } from "assets";
import { NotFoundBox } from "components";
import { ROUTE } from "routes/routes";
import { IMovie } from "types/types";
import { Poster, StyledMovieListItem, Title, Badge } from "./styles";

interface IProps {
  movie: IMovie;
  isNew?: boolean;
}

export const MovieListItem = ({ movie, isNew }: IProps) => {
  const { title, poster, imdbID } = movie;

  return (
    <StyledMovieListItem to={`${ROUTE.MOVIE}${imdbID}`}>
      {poster === "N/A" ? (
        <NotFoundBox />
      ) : (
        <Poster src={poster} alt="poster is still in development" />
      )}
      {isNew && (
        <Badge>
          <TrendsIcon />
        </Badge>
      )}
      <Title>{title}</Title>
    </StyledMovieListItem>
  );
};
