import styled from "styled-components";
import searchIcon from "../../assets/icons/search-icon.svg";
import { Color, inputStyles } from "../../ui";

const StyledSearchInput = styled.input`
  ${inputStyles}

  max-height: 56px;
  margin-right: 40px;
  padding: 16px 20px;
  background: no-repeat url(${searchIcon}) ${Color.Graphite};
  background-position: top 16px right 24px;
`;

export { StyledSearchInput };
