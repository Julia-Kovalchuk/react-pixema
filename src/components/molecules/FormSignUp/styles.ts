import styled from "styled-components";
import { Color, H2, H6 } from "../../../ui";
import { Button } from "../../../components";

const StyledForm = styled.form`
  width: 574px;
  padding: 40px;
  border-radius: 40px;
  background-color: ${Color.Dark};
`;

const FormName = styled.h2`
  margin-bottom: 40px;

  ${H2}
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
  margin-bottom: 32px;
`;

const StyledErrorMessage = styled.div`
  margin-top: 22px;
  text-align: center;
`;

const Note = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 32px;

  ${H6};
  font-weight: 500;
  color: ${Color.Secondary};
`;

const LinkNote = styled.span`
  font-size: 16px;
  color: ${Color.Primary};
`;

export {
  FormName,
  Note,
  StyledForm,
  StyledButton,
  LinkNote,
  StyledErrorMessage,
};
