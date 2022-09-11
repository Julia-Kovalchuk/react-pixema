import styled from "styled-components";
import { Color, H2, inputStyles, S1_3 } from "../../ui";
import { Button } from "../../components";

const StyledForm = styled.form`
  max-width: 574px;
  padding: 40px;

  background-color: ${Color.Dark};
`;

const FormName = styled.h2`
  margin-bottom: 40px;

  ${H2}
`;

const FormInput = styled.input`
  ${inputStyles}

  width: 100%;
  margin-bottom: 24px;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
  margin-bottom: 32px;
`;

const Note = styled.p`
  text-align: center;
  margin-top: 32px;

  ${S1_3};
  font-weight: 500;
  color: ${Color.Secondary};
`;

const LinkNote = styled.span`
  font-size: 16px;
  color: ${Color.Primary};
`;

export { FormName, Note, StyledForm, FormInput, StyledButton, LinkNote };
