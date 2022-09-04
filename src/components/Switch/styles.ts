import styled from "styled-components";
import { Color } from "../../ui/colors";

export const Button = styled.button<{ $isDarkTheme: boolean }>`
  position: absolute;
  background-color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? Color.Primary : Color.Secondary};
  height: 20px;
  width: 32px;
  border-radius: 10px;
  border: none;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ $isDarkTheme }) =>
      $isDarkTheme ? Color.Primary_Light : Color.Light};
  }
`;

export const Circle = styled.div<{ $isDarkTheme: boolean }>`
  background-color: ${Color.White};
  position: relative;
  top: 0px;
  left: ${({ $isDarkTheme }) => ($isDarkTheme ? "2px" : "14px")};
  height: 16px;
  width: 16px;
  border-radius: 50%;
  transition: all 0.5s;

  &:disabled {
    background-color: ${({ $isDarkTheme }) =>
      $isDarkTheme ? Color.Primary_Light : Color.Light};
  }
`;
