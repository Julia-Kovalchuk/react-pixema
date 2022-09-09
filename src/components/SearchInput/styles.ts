import styled from "styled-components";
import { searchIcon } from "../../assets";
import { Color } from "../../ui";

const Filters = styled.button`
  background: no-repeat url(${searchIcon}) ${Color.Graphite};
`;

const StyledSearchInput = styled.input`
  max-height: 56px;
  margin-right: 40px;
  padding: 16px 20px;
  border: none;
  border-radius: 10px;
  background: no-repeat url(${searchIcon}) ${Color.Graphite};
  background-position: top 16px right 24px;
  transition: all 0.3s;

  font-weight: 500;
  font-size: 16px;
  color: ${Color.Theme_White};

  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    color: ${Color.Secondary};
  }

  &:focus {
    background: ${Color.Graphite};
    outline: 2px ${Color.Primary};
    outline-style: solid;
  }

  &:disabled {
    background-color: ${Color.Secondary};
    color: ${Color.Light};
  }

  &:invalid {
    outline: 2px ${Color.Error};
  }
`;

export { StyledSearchInput, Filters };
