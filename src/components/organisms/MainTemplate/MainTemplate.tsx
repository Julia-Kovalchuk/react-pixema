import { useToggle } from "hooks";
import React, { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { AsideNav, Modal, Navbar } from "../..";
import { Container, Wrapper } from "./styles";

export const MainTemplate = () => {
  const { themeMode } = useAppSelector(getUserInfo);
  const [isOpen, toggleModal] = useToggle(false);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  return (
    <Wrapper>
      <Navbar toggleModal={toggleModal} />

      <Container>
        <AsideNav />
        <Outlet />
      </Container>
      {isOpen && <Modal toggleModal={toggleModal} />}
    </Wrapper>
  );
};
