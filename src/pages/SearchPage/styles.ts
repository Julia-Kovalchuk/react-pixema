import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 40px;
  padding-bottom: 60px;
`;

const BadgeContainer = styled.div`
  position: relative;
  top: 150px;
  left: 0;
  display: flex;
  grid-gap: 16px;
  justify-content: start;
  align-items: center;
`;

export { Container, BadgeContainer };
