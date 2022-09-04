import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";

export const AsideNav = () => {
  return (
    <ul>
      <li>
        <Link to={ROUTE.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTE.TRENDS}>Trends</Link>
      </li>
      <li>
        <Link to={ROUTE.FAVORITES}>Favorites</Link>
      </li>
      <li>
        <Link to={ROUTE.SETTINGS}>Settings</Link>
      </li>
    </ul>
  );
};
