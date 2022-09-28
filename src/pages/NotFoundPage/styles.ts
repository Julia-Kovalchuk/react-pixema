import styled from "styled-components";
import { Media } from "ui";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75vh;
`;

const Container = styled.div`
  width: 500px;
  height: 500px;
  margin-left: -250px;

  ${Media.MD} {
    margin-left: 0px;
  }
`;

export { Container, Wrapper };
