import {
  BannerHomeIcon,
  BannerNewIcon,
  BannerSignInIcon,
  MainLogoIcon,
} from "assets";
import React, { useLayoutEffect } from "react";
import { ROUTE } from "routes/routes";
import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Context,
  Logo,
  Slide,
  Title,
  Wrapper,
  WrapperSlide,
  Text,
  PictureContainer,
} from "./styles";

export const ReactPixemaPage = () => {
  const { themeMode } = useAppSelector(getUserInfo);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  return (
    <Wrapper>
      <Title> Dive into the world of cinema with </Title>
      <Logo to={ROUTE.HOME}>
        <MainLogoIcon />
      </Logo>

      <WrapperSlide>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <Context to={ROUTE.HOME}>
              <Slide>
                <Text>Large selection of movies</Text>{" "}
                <PictureContainer>
                  <BannerHomeIcon />
                </PictureContainer>
              </Slide>
            </Context>
          </SwiperSlide>
          <SwiperSlide>
            <Context to={ROUTE.NEW_OTHER_WAY}>
              <Slide>
                <Text>The loudest premieres</Text>{" "}
                <PictureContainer>
                  <BannerNewIcon />
                </PictureContainer>
              </Slide>
            </Context>
          </SwiperSlide>
          <SwiperSlide>
            <Context to={ROUTE.SIGN_IN_OTHER_WAY}>
              <Slide>
                <Text>Register and use on any device</Text>{" "}
                <PictureContainer>
                  <BannerSignInIcon />
                </PictureContainer>
              </Slide>
            </Context>
          </SwiperSlide>
        </Swiper>
      </WrapperSlide>
    </Wrapper>
  );
};
