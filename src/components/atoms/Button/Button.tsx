import React from "react";
import { StyledButton } from "./styles";

interface IProps {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
}

export const Button = ({ type, text }: IProps) => {
  return <StyledButton type={type}>{text}</StyledButton>;
};
