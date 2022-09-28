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
import { ROUTE } from "../../../routes/routes";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import {
  fetchUpdateEmail,
  fetchUpdatePassword,
  updateUserName,
} from "store/feautures/userSlice";
import { useNavigate } from "react-router-dom";

export type SignUpValues = {
  userName: string;
  email: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
  // themeMode: boolean;
};

export const FormSetting = () => {
  const { name, email, isPendingAuth, error, creationTime } =
    useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    resetField,
    control,
    formState: { errors },
    watch,
  } = useForm<SignUpValues>();

  const password = useRef({});

  password.current = watch("newPassword", "");

  const onSubmit: SubmitHandler<SignUpValues> = (userData) => {
    if (userData.userName !== "") dispatch(updateUserName(userData.userName));
    dispatch(fetchUpdateEmail(userData))
      .unwrap()
      .then(() => dispatch(fetchUpdatePassword(userData)).unwrap())
      .then(() => {
        navigate(ROUTE.HOME); //TODO: перенос не тольк на home
        //TODO: modal window
      })
      .finally(() => {
        resetField("password");
        resetField("newPassword");
        resetField("confirmPassword");
      });
  };

  const validationRules = {
    name: {
      // required: "Name is requared",
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
      // required: "Email is requared",
      pattern: {
        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
        message: "Please insert a valid email address",
      },
    },
    password: {
      // required: "Password is requared",
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
      // required: "Confirm  your password",
      validate: (value: {}) =>
        value === password.current || "The passwords don't match",
    },
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormName>Profile</FormName>

      <FormFieldName text="Name" />

      <Controller
        control={control}
        name="userName"
        rules={validationRules.name}
        render={({ field: { value, onChange } }) => (
          <FormInput
            onChange={onChange}
            value={value}
            defaultValue={name}
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
            defaultValue={email ? email : ""}
            placeholder="Your email"
            type="text"
          />
        )}
      />

      {!errors.userName && errors.email && (
        <ErrorMessage>{errors.email.message}</ErrorMessage>
      )}

      <FormName>Password</FormName>

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

      <FormFieldName text="New password" />

      <Controller
        control={control}
        name="newPassword"
        rules={validationRules.password}
        render={({ field: { value, onChange } }) => (
          <FormInput
            onChange={onChange}
            value={value}
            placeholder="New password"
            type="password"
          />
        )}
      />

      {!errors.userName && !errors.email && errors.newPassword && (
        <ErrorMessage>{errors.newPassword.message}</ErrorMessage>
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
            placeholder="Confirm new password"
            type="password"
          />
        )}
      />
      {!errors.userName &&
        !errors.email &&
        !errors.password &&
        !errors.newPassword &&
        errors.confirmPassword && (
          <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
        )}

      {error && (
        <StyledErrorMessage>
          <ErrorMessage>{error}</ErrorMessage>
        </StyledErrorMessage>
      )}
      {isPendingAuth ? <Loading /> : <StyledButton type="submit" text="Save" />}
    </StyledForm>
  );
};
