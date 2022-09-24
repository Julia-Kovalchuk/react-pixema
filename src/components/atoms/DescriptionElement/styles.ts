import styled from "styled-components";
import { Color, H6, Media } from "ui";

const Container = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  ${H6};

  ${Media.MD} {
    grid-template-columns: 30% 70%;
  }

  ${Media.SM} {
    grid-template-columns: 40% 60%;
  }
`;

const InfoTitle = styled.h3`
  color: ${Color.Light};
`;

const Description = styled.h3`
  font-weight: 500;
`;

export { Container, InfoTitle, Description };
