import { Button } from "components";
import styled from "styled-components";
import { Color, H2, Media } from "../../../ui";

const StyledForm = styled.form`
  width: 100%;
  max-width: 574px;
  padding: 40px;
  border-radius: 40px;
  background-color: ${Color.Dark};

  ${Media.SM} {
    min-width: 272px;
    padding: 20px;
  }
`;

const FormName = styled.h2`
  margin-bottom: 40px;
  ${H2}

  ${Media.SM} {
    margin-bottom: 32px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
  margin-bottom: 32px;

  ${Media.SM} {
    margin-top: 10px;
    margin-bottom: 15px;
  }
`;

const StyledErrorMessage = styled.div`
  margin-top: 22px;
  text-align: center;

  ${Media.SM} {
    margin-top: 15px;
  }
`;

export { FormName, StyledForm, StyledButton, StyledErrorMessage };
