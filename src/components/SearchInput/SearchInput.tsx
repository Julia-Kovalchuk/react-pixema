import React from "react";
import { Filters, StyledSearchInput } from "./styles";

export const SearchInput = () => {
  return (
    // через форму!
    <div>
      <StyledSearchInput placeholder="Search..." />
      <Filters></Filters>
    </div>
  );
};
