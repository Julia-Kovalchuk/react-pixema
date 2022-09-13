import styled from "styled-components";

const StyledAsideNav = styled.div`
  position: fixed;
  z-index: 1;
  top: 152px;
  left: 62px;
  height: 100%;
`;

const NavList = styled.ul`
  display: grid;
  grid-gap: 40px;
`;

export { StyledAsideNav, NavList };