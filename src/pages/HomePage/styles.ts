import styled from "styled-components";
import { Color, H6 } from "ui";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 40px;
  padding-bottom: 60px;
`;

const ShowMoreButton = styled.button`
  display: grid;
  grid-template-columns: 80% 20%;
  align-items: center;
  align-self: center;
  grid-gap: 10px;
  max-width: 200px;
  padding: 8px 24px;
  border-radius: 10px;
  background: ${Color.Graphite};
  border: none;
  ${H6};
  color: ${Color.White};
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: ${Color.Light} 0px 5px 20px 0px;
  }
`;

export { Container, ShowMoreButton };
