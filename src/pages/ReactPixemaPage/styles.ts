import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, H1, Media } from "ui";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 50px 20px;

  ${Media.SM} {
    padding: 5px;
  }
`;

const Title = styled.div`
  text-align: center;
  color: ${Color.White};
  font-size: 60px;

  ${Media.MD} {
    font-size: 50px;
    margin-bottom: 30px;
  }

  ${Media.SM} {
    ${H1};
    margin-bottom: 30px;
  }
`;

const Logo = styled(Link)`
  cursor: pointer;
`;

const WrapperSlide = styled.div`
  width: 100%;
`;

const Context = styled(Link)`
  width: 100%;
  height: 100%;
`;

const Slide = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-gap: 20px;
  width: 60%;
  height: 500px;
  padding: 30px;
  margin: 50px auto;
  border-radius: 50px;
  background: ${Color.Dark};

  ${Media.MD} {
    width: 80%;
  }

  ${Media.SM} {
    flex-direction: column;
    padding: 50px 20px;
  }
`;

const Text = styled.div`
  color: ${Color.Primary};
  ${H1};
  text-align: center;
`;

const PictureContainer = styled.div`
  width: 400px;
  object-fit: cover;

  ${Media.SM} {
    width: 300px;
  }
`;

export {
  Wrapper,
  WrapperSlide,
  Slide,
  Context,
  Title,
  Logo,
  Text,
  PictureContainer,
};
