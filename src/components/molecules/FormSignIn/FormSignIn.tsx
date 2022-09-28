import { ErrorMessage, FormFieldName, FormInput, Loading } from "components";
import { useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "routes/routes";
import { fetchSignInUser } from "store/feautures/userSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import {
  FormName,
  LinkNote,
  Note,
  ResetPasswordLink,
  StyledButton,
  StyledErrorMessage,
  StyledForm,
  Text,
} from "./styles";

export type SignInValues = {
  email: string;
  password: string;
};

interface NavigateFunction {
  (
    to: string,
    options?: {
      replace?: boolean;
      state?: any;
      relative?: any;
    },
  ): void;
  (delta: number): void;
}

export const FormSignIn = () => {
  const { isPendingAuth, error, isResetPassword } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();

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
      .unwrap()
      .then(() => {
        navigate(ROUTE.HOME, { state: {}, replace: true }); //TODO: перенос не тольк на home
        //TODO: modal window
      })
      .finally(() => {
        reset();
      });
  };

  const validationRules = {
    email: {
      required: "Email is requared",
      pattern: {
        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
        message: "Please insert a valid email address",
      },
    },
    password: {
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
    },
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormName>Sign In</FormName>
      {isResetPassword && <Note>Your password has been changed!</Note>}

      <FormFieldName text="Email" />
      <Controller
        control={control}
        name="email"
        rules={validationRules.email}
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
        rules={validationRules.password}
        render={({ field: { value, onChange } }) => (
          <FormInput
            onChange={onChange}
            value={value}
            placeholder="Your password"
            type="password"
          />
        )}
      />

      <ResetPasswordLink to={ROUTE.RESSET_PASSWORD}>
        Forgot password?
      </ResetPasswordLink>

      {!errors.email && errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}
      {error && (
        <StyledErrorMessage>
          <ErrorMessage>{error}</ErrorMessage>
        </StyledErrorMessage> //TODO Modal?
      )}
      {isPendingAuth ? (
        <Loading />
      ) : (
        <StyledButton type="submit" text="Sign up" />
      )}

      <Note>
        <Text>Don’t have an account? </Text>{" "}
        <LinkNote to={ROUTE.SIGN_UP_OTHER_WAY}> Sign Up</LinkNote>
      </Note>
    </StyledForm>
  );
};
