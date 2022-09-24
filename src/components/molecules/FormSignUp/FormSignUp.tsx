import { useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  FormName,
  LinkNote,
  Note,
  StyledButton,
  StyledErrorMessage,
  StyledForm,
  Text,
} from "./styles";
import { ErrorMessage, FormFieldName, Loading, FormInput } from "../..";
import { ROUTE } from "../../../routes";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { fetchSignUpUser } from "store/feautures/userSlice";
import { useNavigate } from "react-router-dom";

export type SignUpValues = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const FormSignUp = () => {
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
    watch,
  } = useForm<SignUpValues>();

  const password = useRef({});

  password.current = watch("password", "");

  const onSubmit: SubmitHandler<SignUpValues> = (userData) => {
    dispatch(fetchSignUpUser(userData))
      .unwrap()
      .then(() => {
        navigate(ROUTE.HOME); //TODO: перенос не тольк на home
        //TODO: modal window
      })
      .finally(() => {
        reset();
      });
  };

  const validationRules = {
    name: {
      required: "Name is requared",
      maxLength: {
        value: 50,
        message: "Name must be less than 50 characters long",
      },
      pattern: {
        value: /[A-Za-z]/,
        message: "Name must contain only letters",
      },
    },
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
    confirnPassword: {
      required: "Confirm  your password",
      validate: (value: {}) =>
        value === password.current || "The passwords don't match",
    },
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormName>Sign Up</FormName>

      <FormFieldName text="Name" />

      <Controller
        control={control}
        name="userName"
        rules={validationRules.name}
        render={({ field: { value, onChange } }) => (
          <FormInput
            onChange={onChange}
            value={value}
            placeholder="Your name"
            type="text"
          />
        )}
      />

      {errors.userName && (
        <ErrorMessage>{errors.userName.message}</ErrorMessage>
      )}

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

      {!errors.userName && errors.email && (
        <ErrorMessage>{errors.email.message}</ErrorMessage>
      )}

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

      {!errors.userName && !errors.email && errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}

      <FormFieldName text="Confirm password" />

      <Controller
        control={control}
        name="confirmPassword"
        rules={validationRules.confirnPassword}
        render={({ field: { value, onChange } }) => (
          <FormInput
            onChange={onChange}
            value={value}
            placeholder="Confirm password"
            type="password"
          />
        )}
      />

      {!errors.userName &&
        !errors.email &&
        !errors.password &&
        errors.confirmPassword && (
          <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
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

      <Note>
        <Text>Already have an account? </Text>{" "}
        <LinkNote to={ROUTE.SIGN_IN_OTHER_WAY}> Sign In</LinkNote>
      </Note>
    </StyledForm>
  );
};
