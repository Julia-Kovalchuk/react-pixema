import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, H4, H6, Media } from "ui";

const Container = styled.div`
  position: relative;
`;

const StyledMovieListItem = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: inherit;

  &:hover {
    color: ${Color.Primary};
  }
`;

const Poster = styled.img`
  width: 100%;
  height: 357px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 14px;

  ${Media.MD} {
    height: 279px;
  }

  ${Media.SM} {
    max-height: 100%;
  }
`;

const Title = styled.h2`
  ${H4}
  color: inherit;
`;

const FavoritesButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 28px;
  padding-top: 2px;
  border-radius: 6px;
  text-align: center;
  vertical-align: middle;
  background: ${Color.Graphite};
  fill: ${Color.Primary};
  cursor: pointer;
  transition: fill 0.3s;

  &:hover {
    fill: ${Color.PrimaryLight};
  }

  &:active {
    fill: ${Color.Light};
  }

  &:disabled {
    fill: ${Color.Light};
    background: ${Color.Secondary};
  }
`;

const Rating = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 28px;
  border-radius: 6px;
  text-align: center;
  vertical-align: middle;
  background: ${Color.Green};
  ${H6};
  color: ${Color.White};
`;

export {
  StyledMovieListItem,
  Poster,
  Title,
  FavoritesButton,
  Container,
  Rating,
};
