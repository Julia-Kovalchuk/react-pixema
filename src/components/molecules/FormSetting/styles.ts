import styled from "styled-components";
import { Color, H2, H6, Media } from "../../../ui";
import { Button } from "../../../components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;

  ${Media.MD} {
    grid-template-columns: 1fr;
  }
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 40px;

  ${Media.SM} {
    grid-gap: 32px;
  }
`;

const SectionName = styled.h2`
  ${H2}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 16px;

  ${Media.SM} {
    grid-gap: 18px;
  }
`;

const FildsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  padding: 40px;
  border-radius: 10px;
  background: ${Color.Dark};

  ${Media.SM} {
    padding: 24px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 24px;

  ${Media.SM} {
    grid-gap: 20px;
  }
`;

// TODO c label перестилизовать формы
const FormFieldName = styled.label`
  ${H6};
  color: ${Color.White};
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

export {
  Wrapper,
  SectionName,
  Container,
  FildsContainer,
  Box,
  FormFieldName,
  StyledForm,
  StyledButton,
  StyledErrorMessage,
};
