import styled from "styled-components";
import { Color, Media } from "ui";

const StyledSearchInput = styled.input`
  max-height: 56px;
  border: none;
  border-radius: 10px;
  padding: 16px 20px;

  font-weight: 500;
  font-size: 16px;
  color: ${Color.ThemeWhite};

  background: ${Color.Graphite};
  transition: all 0.3s;

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

  &:-moz-ui-invalid {
    outline: 2px ${Color.Error};
  }

  ${Media.MD} {
    width: 60%;
    margin-right: 22px;
    margin-left: 22px;
  }

  ${Media.SM} {
    width: 100%;
    margin: 80px 0px 0px;
  }
`;

export { StyledSearchInput };
