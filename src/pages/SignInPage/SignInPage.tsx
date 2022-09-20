import { FormSignIn, ReturnHomePageLink } from "components";
import React from "react";
import { StyledSignInPage } from "./styles";

export const SignInPage = () => {
  return (
    <StyledSignInPage>
      <FormSignIn />
      <ReturnHomePageLink />
    </StyledSignInPage>
  );
};
