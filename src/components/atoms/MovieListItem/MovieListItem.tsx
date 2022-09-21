import React from "react";
import { ROUTE } from "routes";
import { IMovieAPI } from "../../../types/types";
import { Poster, StyledMovieListItem, Title } from "./styles";

interface IProps {
  movie: IMovieAPI;
}

export const MovieListItem = ({ movie }: IProps) => {
  return (
    <StyledMovieListItem to={`${ROUTE.MOVIE}${movie.imdbID}`}>
      <Poster src={movie.Poster} />
      <Title>{movie.Title}</Title>
    </StyledMovieListItem>
  );
};
