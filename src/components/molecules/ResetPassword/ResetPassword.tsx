import { ErrorMessage, FormFieldName, FormInput, Loading } from "components";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "routes/routes";
import { fetchResetPassword } from "store/feautures/userSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import {
  FormName,
  StyledButton,
  StyledErrorMessage,
  StyledForm,
} from "./styles";

export type SignInValues = {
  email: string;
};

export const Resetpassword = () => {
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); // после ошибки и пару секунд

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<SignInValues>();

  const onSubmit: SubmitHandler<SignInValues> = (userData) => {
    dispatch(fetchResetPassword(userData))
      .unwrap()
      .then(() => {
        navigate(ROUTE.SIGN_IN_OTHER_WAY);
        //TODO: MODAL после сброса показывем модалку с сообщением на ok перекидываем на sign in
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
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormName>Reset Password</FormName>

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

      {error && (
        <StyledErrorMessage>
          <ErrorMessage>{error}</ErrorMessage>
        </StyledErrorMessage> //TODO Modal?
      )}
      {isPendingAuth ? (
        <Loading />
      ) : (
        <StyledButton type="submit" text="Enter" />
      )}
    </StyledForm>
  );
};