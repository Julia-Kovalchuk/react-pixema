import styled from "styled-components";
import { Color } from "../../../ui";

type isDarkTheme = { $isDarkTheme: boolean };

export const Button = styled.button<isDarkTheme>`
  position: absolute;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  border: none;
  background-color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? Color.Primary : Color.Secondary};
  transition: background-color 0.3s;

  //с return отформатировать не получилось
  &:hover {
    background-color: ${({ $isDarkTheme }) =>
      $isDarkTheme ? Color.PrimaryLight : Color.Light};
  }
`;

export const Circle = styled.div<isDarkTheme>`
  position: relative;
  top: 0px;
  left: ${({ $isDarkTheme }) => ($isDarkTheme ? "2px" : "14px")};
  height: 16px;
  width: 16px;
  background-color: ${Color.White};
  border-radius: 50%;
  transition: left 0.5s;

  //с return отформатировать не получилось
  &:disabled {
    background-color: ${({ $isDarkTheme }) =>
      $isDarkTheme ? Color.PrimaryLight : Color.Light};
  }
`;
