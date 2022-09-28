import styled from "styled-components";
import { Color, H1, H2, H4, H6, Media } from "ui";

type isFavorit = { $isFavorit: boolean };

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: start;
  grid-gap: 40px;
  color: ${Color.White};

  ${Media.MD} {
    grid-template-columns: 1fr 2fr;
    grid-gap: 32px;
  }

  ${Media.SM} {
    position: relative;
    display: flex;
    flex-direction: column;
  }
`;

const PosterContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  width: 100%;

  ${Media.SM} {
    margin-top: 175px;
  }
`;

const Poster = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 30px;

  ${Media.MD} {
    border-radius: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;

  ${Media.MD} {
    grid-gap: 3px;
  }
`;

const Button = styled.button`
  background: ${Color.Graphite};
  text-align: center;
  padding: 16px;
  fill: ${Color.Light};
  stroke: ${Color.Light};
  overflow: hidden;
  cursor: pointer;

  &:hover {
    fill: ${Color.White};
    stroke: ${Color.White};
    scale: 1.02;
  }

  &:active {
    scale: 0.95;
  }

  &:disabled {
    background: ${Color.Secondary};
  }
`;

const FavoritesButton = styled(Button)<isFavorit>`
  fill: ${({ $isFavorit }) => ($isFavorit ? Color.Primary : Color.Light)};
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const ShareButton = styled(Button)`
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainInfo = styled.div`
  ${Media.SM} {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`;

const Genre = styled.p`
  ${H6};
  color: ${Color.Light};
`;

const MovieTitle = styled.h2`
  margin-bottom: 24px;
  ${H1};
`;

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  ${H6};
`;

const Rating = styled.span`
  padding: 2px 8px 3px;
  margin-right: 20px;
  border-radius: 6px;
  background: ${Color.Green};
`;

const Runtime = styled.span`
  padding: 2px 5px 3px;
  border-radius: 6px;
  background: ${Color.Graphite};
`;

const Description = styled.div`
  margin-bottom: 40px;
  ${H4};
  font-weight: 500;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-bottom: 56px;

  ${Media.MD} {
    margin-bottom: 48px;
  }
`;

const Recommendations = styled.p`
  margin-bottom: 40px;
  ${H2}
`;

export {
  StyledPage,
  Wrapper,
  PosterContainer,
  ButtonContainer,
  Poster,
  FavoritesButton,
  ShareButton,
  Container,
  Genre,
  MovieTitle,
  BadgeContainer,
  Rating,
  Runtime,
  Description,
  InfoContainer,
  Recommendations,
  MainInfo,
};
