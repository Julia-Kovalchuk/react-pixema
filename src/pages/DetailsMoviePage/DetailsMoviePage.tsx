import { FavoritesButtonIcon, ShareIcon } from "assets";
import {
  DescriptionElement,
  ErrorMessage,
  LoadingMovies,
  NotFoundBox,
} from "components";
import { MouseEvent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addToFavotires } from "store/feautures/favoritesSlice";
import { fetchMovieByDetails } from "store/feautures/movieDetailsSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getMovieDetails } from "store/selectors/movieDetailsSelectors";
import { getUserInfo } from "store/selectors/userSelectors";
import { getFavorites } from "store/selectors/favoritesSelectors";
import {
  StyledPage,
  BadgeContainer,
  ButtonContainer,
  Container,
  Description,
  FavoritesButton,
  Genre,
  InfoContainer,
  MainInfo,
  MovieTitle,
  Poster,
  PosterContainer,
  Rating,
  Recommendations,
  Runtime,
  ShareButton,
  Wrapper,
} from "./styles";
import { Slider } from "components/molecules/Slider/Slider";

export const DetailsMoviePage = () => {
  const { imdbID = "" } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, error, details, recommendations } =
    useAppSelector(getMovieDetails);
  const { isAuth } = useAppSelector(getUserInfo);
  const { favorites } = useAppSelector(getFavorites);

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
    id,
    imdbRating,
    totalSeasons,
  } = details;

  const isFavorit = !!favorites.find((movie) => movie.id === id);

  const handleAddFavorites = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    dispatch(addToFavotires(details));
  };

  if (isLoading) {
    return <LoadingMovies />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  // ОШИБКУ перестилизовать, хочу другую

  return (
    <StyledPage>
      <Wrapper>
        <PosterContainer>
          {poster === "N/A" ? <NotFoundBox /> : <Poster src={poster} />}
          <ButtonContainer>
            {isAuth && (
              <FavoritesButton
                type="button"
                onClick={handleAddFavorites}
                $isFavorit={isFavorit}
              >
                <FavoritesButtonIcon />
              </FavoritesButton>
            )}
            <ShareButton type="button">
              <ShareIcon />
            </ShareButton>
          </ButtonContainer>
        </PosterContainer>

        <Container>
          <MainInfo>
            {genre && <Genre>{genre.split(", ").join(" • ")}</Genre>}
            <MovieTitle>{title}</MovieTitle>
            <BadgeContainer>
              <Rating>{imdbRating}</Rating>
              <Runtime>{runtime}</Runtime>
            </BadgeContainer>
          </MainInfo>

          <Description>{plot}</Description>

          <InfoContainer>
            {totalSeasons && totalSeasons !== "N/A" && (
              <DescriptionElement
                infoTitle="Seasons"
                description={totalSeasons}
              />
            )}
            {year !== "N/A" && (
              <DescriptionElement infoTitle="Year" description={year} />
            )}
            {released && (
              <DescriptionElement infoTitle="Released" description={released} />
            )}
            {boxOffice && boxOffice !== "N/A" && (
              <DescriptionElement
                infoTitle="BoxOffice"
                description={boxOffice}
              />
            )}
            {country !== "N/A" && (
              <DescriptionElement infoTitle="Country" description={country} />
            )}
            {actors !== "N/A" && (
              <DescriptionElement infoTitle="Actors" description={actors} />
            )}
            {director !== "N/A" && (
              <DescriptionElement infoTitle="Director" description={director} />
            )}
            {writer !== "N/A" && (
              <DescriptionElement infoTitle="Writers" description={writer} />
            )}
          </InfoContainer>
          <Recommendations>Recommendations</Recommendations>
        </Container>
      </Wrapper>
      <Slider
        recommendations={recommendations}
        isLoading={isLoading}
        error={error}
      />
    </StyledPage>
  );
};