import React from "react";
import { IMovie } from "../../../types/types";
import { Poster, StyledMovieListItem, Title } from "./styles";

interface IProps {
  movie: IMovie;
}

export const MovieListItem = ({ movie }: IProps) => {
  // обернуть в ссылку на movie

  return (
    <StyledMovieListItem>
      <Poster src={movie.Poster} />
      <Title>{movie.Title}</Title>
    </StyledMovieListItem>
  );
};
