import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper";
import { Wrapper, Container, NavPrev, NavNext, ArrowContainer } from "./styles";
import { IMovie } from "types/types";
import { Slide } from "components";
import { ArrowLeftIcon, ArrowRightIcon } from "assets";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { ErrorMessage, LoadingMovies } from "components";
import { useWindowSize } from "hooks/useWindowSize";
import { Breackpoint } from "ui/media";

interface IProps {
  recommendations: IMovie[];
  error: string | null;
  isLoading: boolean;
}

export const Slider = ({ recommendations, error, isLoading }: IProps) => {
  const { screenWidth } = useWindowSize();

  const getslideСount = () => {
    if (screenWidth) {
      if (screenWidth > 2000) {
        return 6;
      } else if (screenWidth > 1500) {
        return 5;
      } else if (screenWidth > 1300) {
        return 4;
      } else if (screenWidth > 700) {
        return 3;
      } else if (screenWidth > Breackpoint.SM) {
        return 2;
      }
    }
    return 1;
  };

  // if (isLoading) {
  //   return <LoadingMovies />;
  // }

  // if (error) {
  //   return <ErrorMessage>{error}</ErrorMessage>;
  // }

  return isLoading ? (
    <LoadingMovies />
  ) : error ? (
    <ErrorMessage>{error}</ErrorMessage>
  ) : (
    <Wrapper>
      <ArrowContainer>
        <NavPrev className="custom_prev_btn">
          <ArrowLeftIcon />
        </NavPrev>
        <NavNext className="custom_next_btn">
          <ArrowRightIcon />
        </NavNext>
      </ArrowContainer>
      <Swiper
        slidesPerView={getslideСount()}
        spaceBetween={40}
        freeMode={true}
        centeredSlides={false}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".custom_next_btn",
          prevEl: ".custom_prev_btn",
        }}
        modules={[FreeMode, Navigation, Autoplay]}
      >
        <Container>
          {recommendations.map((movie) => {
            return (
              <SwiperSlide>
                <Slide movie={movie} key={movie.imdbID} />
              </SwiperSlide>
            );
          })}
        </Container>
      </Swiper>
    </Wrapper>
  );
};
