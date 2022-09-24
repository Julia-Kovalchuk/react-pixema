import { FavoritesButtonIcon, ShareIcon } from "assets";
import { DescriptionElement, ErrorMessage, LoadingMovies } from "components";
import { MouseEvent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addToFavotires } from "store/feautures/favoritesSlice";
import { fetchMovieByDetails } from "store/feautures/movieDetailsSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getMovieDetails } from "store/selectors/movieDetailsSelectors";
import { getUserInfo } from "store/selectors/userSelectors";
import { IMovieDetails, IMovieDetailsAPI } from "types/types";
import { transformMovieDetails } from "utils/transformMovieDetails";
import {
  BadgeContainer,
  ButtonContainer,
  Container,
  Description,
  FavoritesButton,
  Genre,
  InfoContainer,
  MovieTitle,
  Poster,
  PosterContainer,
  Rating,
  Recommendations,
  Runtime,
  ShareButton,
  Wrapper,
} from "./styles";

export const DetailsMoviePage = () => {
  const { imdbID = "" } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, error, details } = useAppSelector(getMovieDetails);
  const { isAuth } = useAppSelector(getUserInfo);

  const transformedMovieDetails = transformMovieDetails(
    details as IMovieDetailsAPI,
  );

  useEffect(() => {
    dispatch(fetchMovieByDetails(imdbID));
  }, [dispatch, imdbID]);

  const {
    actors,
    boxOffice,
    country,
    director,
    genre,
    plot,
    poster,
    released,
    runtime,
    title,
    // type,
    writer,
    year,
    imdbRating,
    totalSeasons,
  } = transformedMovieDetails || ({} as IMovieDetails);

  const handleFavorites = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    dispatch(addToFavotires(transformedMovieDetails));
  };

  const handlerRejection = () => {
    alert("To add to favorites you need to log in");

    //TODO: заменить намодалку или просто на ошибку
  };

  const handleButton = isAuth ? handleFavorites : handlerRejection;

  if (isLoading) {
    return <LoadingMovies />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  // ОШИБКУ перестилизовать, хочу другую

  return (
    <Wrapper>
      <PosterContainer>
        <Poster src={poster} />
        <ButtonContainer>
          <FavoritesButton type="button" onClick={handleButton}>
            <FavoritesButtonIcon />
          </FavoritesButton>
          <ShareButton type="button">
            <ShareIcon />
          </ShareButton>
        </ButtonContainer>
      </PosterContainer>

      <Container>
        {genre && <Genre>{genre.split(", ").join(" • ")}</Genre>}
        <MovieTitle>{title}</MovieTitle>

        <BadgeContainer>
          <Rating>{imdbRating}</Rating>
          <Runtime>{runtime}</Runtime>
        </BadgeContainer>

        <Description>{plot}</Description>

        <InfoContainer>
          {totalSeasons && (
            <DescriptionElement
              infoTitle="Seasons"
              description={totalSeasons}
            />
          )}
          <DescriptionElement infoTitle="Year" description={year} />
          <DescriptionElement infoTitle="Released" description={released} />
          {boxOffice && (
            <DescriptionElement infoTitle="BoxOffice" description={boxOffice} />
          )}
          <DescriptionElement infoTitle="Country" description={country} />
          <DescriptionElement infoTitle="Actors" description={actors} />
          <DescriptionElement infoTitle="Director" description={director} />
          <DescriptionElement infoTitle="Writers" description={writer} />
        </InfoContainer>

        <Recommendations>Recommendations</Recommendations>
        <div>and there is beautifus slider</div>
      </Container>
    </Wrapper>
  );
};
