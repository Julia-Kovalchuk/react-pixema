import { FormSignUp, ReturnHomePageLink } from "components";
import { StyledSignUpPage } from "./styles";

export const SignUpPage = () => {
  return (
    <StyledSignUpPage>
      <FormSignUp />
      <ReturnHomePageLink />
    </StyledSignUpPage>
  );
};
