import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  FormName,
  LinkNote,
  Note,
  StyledButton,
  StyledErrorMessage,
  StyledForm,
} from "./styles";
import {
  Customlink,
  ErrorMessage,
  FormFieldName,
  Loading,
  FormInput,
} from "../..";
import { ROUTE } from "../../../routes";
import { useNavigate } from "react-router-dom";
import { getFirebaseMessage } from "../../../utils/firebaseErrors";
import { useAuth } from "../../../hooks";

export type SignUpValues = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const FormSignUp = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<SignUpValues>();

  const password = useRef({});

  password.current = watch("password", "");

  // асинхронный код перенести в РТК (в слайс в сторе. который обрабатывает авторизацию)
  const onSubmit: SubmitHandler<SignUpValues> = ({
    userName,
    email,
    password,
    confirmPassword,
  }) => {
    setIsLoading(true);
    setErrorMessage(null);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate(ROUTE.HOME); //TODO: перенос не тольк на home
      })
      .catch((err) => {
        setErrorMessage(getFirebaseMessage(err.code));
      })
      .finally(() => {
        setIsLoading(false);
        setAuth(true);
      });
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormName>Sign Up</FormName>

      <FormFieldName text="Name" />
      <FormInput
        type="text"
        placeholder="Your name"
        {...register("userName", {
          required: "Name is requared",
          maxLength: {
            value: 50,
            message: "Name must be less than 50 characters long",
          },
          pattern: {
            value: /[A-Za-z]/,
            message: "Name must contain only letters",
          },
        })}
      />
      {errors.userName && (
        <ErrorMessage>{errors.userName.message}</ErrorMessage>
      )}

      <FormFieldName text="Email" />
      <FormInput
        type="text"
        placeholder="Your email"
        {...register("email", {
          required: "Email is requared",
          pattern: {
            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            message: "Please insert a valid email address",
          },
        })}
      />
      {!errors.userName && errors.email && (
        <ErrorMessage>{errors.email.message}</ErrorMessage>
      )}

      <FormFieldName text="Password" />
      <FormInput
        type="password"
        placeholder="Your password"
        {...register("password", {
          required: "Password is requared",
          minLength: {
            value: 6,
            message: "Password must contain at least 6 characters",
          },
          pattern: {
            value: /(?=.*\d)(?=.*[a-z]).{6,}/,
            message:
              "Password must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters",
          },
        })}
      />
      {!errors.userName && !errors.email && errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}

      <FormFieldName text="Confirm password" />
      <FormInput
        type="password"
        placeholder="Confirm password"
        {...register("confirmPassword", {
          required: "Confirm  your password",
          validate: (value) =>
            value === password.current || "The passwords don't match",
        })}
      />

      {!errors.userName &&
        !errors.email &&
        !errors.password &&
        errors.confirmPassword && (
          <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
        )}

      {errorMessage && (
        <StyledErrorMessage>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </StyledErrorMessage>
      )}
      {isLoading ? <Loading /> : <StyledButton type="submit" text="Sign up" />}

      <Note>
        Already have an account?
        <Customlink to={ROUTE.SIGN_IN}>
          <LinkNote>Sign In</LinkNote>
        </Customlink>
      </Note>
    </StyledForm>
  );
};
