import {
  Customlink,
  ErrorMessage,
  FormFieldName,
  FormInput,
  Loading,
} from "components";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "routes";
import { fetchSignInUser } from "store/feautures/userSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { getFirebaseMessage } from "utils/firebaseErrors";
import {
  FormName,
  LinkNote,
  Note,
  StyledButton,
  StyledErrorMessage,
  StyledForm,
  Text,
} from "../FormSignUp/styles";

export type SignInValues = {
  email: string;
  password: string;
};

export const FormSignIn = () => {
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
    watch,
  } = useForm<SignInValues>();

  const password = useRef({});

  password.current = watch("password", "");

  const onSubmit: SubmitHandler<SignInValues> = (userData) => {
    dispatch(fetchSignInUser(userData))
      .then(() => {
        navigate(ROUTE.HOME); //TODO: перенос не тольк на home
        //TODO: modal window
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormName>Sign In</FormName>

      <FormFieldName text="Email" />
      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email is requared",
          pattern: {
            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            message: "Please insert a valid email address",
          },
        }}
        render={({ field: { value, onChange } }) => (
          <FormInput
            onChange={onChange}
            value={value}
            placeholder="Your email"
            type="text"
          />
        )}
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      <FormFieldName text="Password" />
      <Controller
        control={control}
        name="password"
        rules={{
          required: "Password is requared",
          minLength: {
            value: 6,
            message: "Password must contain at least 6 characters",
          },
          pattern: {
            value: /(?=.*\d)(?=.*[a-z]).{6,}/,
            message: `Password must contain at least one number and one uppercase +
              and lowercase letter, and at least 6 or more characters`,
          },
        }}
        render={({ field: { value, onChange } }) => (
          <FormInput
            onChange={onChange}
            value={value}
            placeholder="Your password"
            type="password"
          />
        )}
      />
      {!errors.email && errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}
      {error && (
        <StyledErrorMessage>
          <ErrorMessage>{error}</ErrorMessage>
        </StyledErrorMessage>
      )}
      {isPendingAuth ? (
        <Loading />
      ) : (
        <StyledButton type="submit" text="Sign up" />
      )}

      {/* <p>Forgot password?</p> //TODO: ????? */}

      <Note>
        <Text>Don’t have an account? </Text>{" "}
        <LinkNote to={ROUTE.SIGN_UP_OTHER_WAY}> Sign Up</LinkNote>
      </Note>
    </StyledForm>
  );
};
