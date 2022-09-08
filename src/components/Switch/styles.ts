import styled from "styled-components";
import { Color } from "../../ui/colors";

type isDarkTheme = { $isDarkTheme: boolean };

export const Button = styled.button<isDarkTheme>`
  position: absolute;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  border: none;
  background-color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? Color.Primary : Color.Secondary};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ $isDarkTheme }) =>
      $isDarkTheme ? Color.Primary_Light : Color.Light};
  }
`;

export const Circle = styled.div<isDarkTheme>`
  position: relative;
  top: 0px;
  left: ${({ $isDarkTheme }) => ($isDarkTheme ? "2px" : "14px")};
  background-color: ${Color.White};
  height: 16px;
  width: 16px;
  border-radius: 50%;
  transition: all 0.5s;

  &:disabled {
    background-color: ${({ $isDarkTheme }) =>
      $isDarkTheme ? Color.Primary_Light : Color.Light};
  }
`;
