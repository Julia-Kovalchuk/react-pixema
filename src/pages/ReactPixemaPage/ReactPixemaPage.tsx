import { LogoIconDark, LogoIconLight } from "assets";
import { useWindowSize } from "hooks";
import React from "react";
import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors";
import { Breackpoint } from "ui";
import { Container, Wrapper } from "./styles";

export const ReactPixemaPage = () => {
  const { themeMode } = useAppSelector(getUserInfo);
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

  return (
    <Wrapper>
      <Container>
        <p> Окунись в мир кино вместе с </p>
        <LogoIconDark />
      </Container>

      {/*   
    <WrapperSlide>
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
                <p>Слфйд</p>
              </SwiperSlide>
            );
          })}
        </Container>
      </Swiper>
    </WrapperSlide> */}
    </Wrapper>
  );
};
