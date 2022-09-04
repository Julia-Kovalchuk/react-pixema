import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { AsideNav } from "../AsideNav/AsideNav";
import { Navbar } from "../Navbar/Navbar";
import { Switch } from "../Switch/Switch";

export const MainTemplate = () => {
  return (
    <>
      <Navbar />
      <>
        <>
          <AsideNav />
          <Footer />
        </>
        <Outlet />
        <Switch />
      </>
    </>
  );
};
