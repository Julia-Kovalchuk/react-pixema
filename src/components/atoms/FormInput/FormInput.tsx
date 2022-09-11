import React, { ChangeEvent } from "react";
import { UseFormRegister, ValidationRule } from "react-hook-form";
import { SignUpValues } from "../../molecules/FormSignUp/FormSignUp";
import { StyledFormInput } from "./styles";

interface IProps {
  placeholder: string;
  type: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: "email" | "password" | "userName" | "confirmPassword";
  register?: UseFormRegister<SignUpValues>;
  rules?: IRules;
}

interface IRules {
  required?: boolean;
  maxLength?: ValidationRule<number>;
  pattern?: ValidationRule<RegExp>;
}

export const FormInput = ({
  placeholder,
  type,
  value,
  name,
  onChange,
  register,
  rules,
}: IProps) => {
  return (
    <StyledFormInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      {...(register && { ...register(name, { ...rules }) })}
    />
  );
};
