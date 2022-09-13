import { Control, Controller, ValidationRule } from "react-hook-form";
import { SignUpValues } from "../../molecules/FormSignUp/FormSignUp";
import { StyledFormInput } from "./styles";

interface IProps {
  placeholder: string;
  type: string;
  name: "email" | "password" | "userName" | "confirmPassword";
  control: Control<SignUpValues>;
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
  name,
  control,
  rules,
}: IProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ref } }) => (
        <StyledFormInput
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          // ref={ref}
          type={type}
        />
      )}
      {...rules}
    />
  );
};
