import styled from "styled-components";
import { Color, H2, H6, Media } from "../../../ui";
import { Button } from "../../../components";
import { Link } from "react-router-dom";

const StyledForm = styled.form`
  width: 100%;
  min-width: 574px;
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

const Note = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 32px;
  ${H6};
  font-weight: 500;

  ${Media.SM} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
  }
`;

const Text = styled.p`
  color: ${Color.Secondary};
`;

const LinkNote = styled(Link)`
  color: ${Color.Primary};

  &:hover {
    color: ${Color.PrimaryLight};
  }

  &:active {
    color: ${Color.Primary};
  }

  &:disabled {
    color: ${Color.Light};
  }
`;

const ResetPasswordLink = styled(Link)`
  font-size: 14px;
  margin-bottom: 10px;
  color: ${Color.Secondary};

  &:hover {
    color: ${Color.PrimaryLight};
  }

  &:active {
    color: ${Color.Primary};
  }
`;

export {
  FormName,
  Note,
  StyledForm,
  StyledButton,
  LinkNote,
  StyledErrorMessage,
  Text,
  ResetPasswordLink,
};
