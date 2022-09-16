import styled from "styled-components";
import { Color } from "../../../ui";

const StyledSearchInput = styled.input`
  background-position: top 16px right 24px;
  max-height: 56px;
  margin-right: 40px;
  max-height: 56px;
  border: none;
  border-radius: 10px;
  padding: 16px 20px;

  font-weight: 500;
  font-size: 16px;
  color: ${Color.Theme_White};

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
`;

export { StyledSearchInput };
