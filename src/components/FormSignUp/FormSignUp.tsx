import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FieldName, FormName, Note } from "./styles";

type SignUpValues = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpValues>();

  const onSubmit: SubmitHandler<SignUpValues> = ({
    userName,
    email,
    password,
    confirmPassword,
  }) => {
    reset();
  };

  return (
    <form>
      <FormName />
      <FieldName>Name</FieldName>
      <input placeholder="Your name" />
      <FieldName>Email</FieldName>
      <input placeholder="Your email" />
      <FieldName>Password</FieldName>
      <input placeholder="Your password" />
      <FieldName>Confirm password</FieldName>
      <input placeholder="Confirm password" />

      {/* добавить компонент кнопку */}
      <button>Sign up</button>

      <Note>
        Already have an account? <>Sign In</>
      </Note>
    </form>
  );
};
