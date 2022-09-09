import { css } from "styled-components";
import { Color } from "./colors";

export const inputStyles = css`
  max-height: 56px;
  border: none;
  border-radius: 10px;
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
