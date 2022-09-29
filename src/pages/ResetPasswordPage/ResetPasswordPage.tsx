import { Resetpassword, ReturnHomePageLink } from "components";
import React from "react";
import { StyledResetPasswordPage } from "./styles";

export const ResetPasswordPage = () => {
  return (
    <StyledResetPasswordPage>
      <Resetpassword />
      <ReturnHomePageLink />
    </StyledResetPasswordPage>
  );
};
