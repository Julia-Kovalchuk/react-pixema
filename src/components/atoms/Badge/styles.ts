import styled from "styled-components";
import { Color, H6 } from "ui";

const Container = styled.div`
  display: flex;
  grid-gap: 10px;
  padding: 8px 24px;
  border-radius: 40px;
  background: ${Color.Graphite};
`;

const Text = styled.div`
  color: ${Color.White};
  ${H6};
`;

const ButtonClose = styled.button`
  cursor: pointer;
  background: none;
  transition: scale 0.3s;

  &:hover {
    scale: 1.1;
  }

  &:active {
    scale: 0.95;
  }
`;

export { Container, Text, ButtonClose };
