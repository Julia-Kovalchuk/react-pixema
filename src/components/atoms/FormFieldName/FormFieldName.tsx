import { StyledFormFieldName } from "./styles";

interface IProps {
  text: string;
}

export const FormFieldName = ({ text }: IProps) => {
  return <StyledFormFieldName>{text}</StyledFormFieldName>;
};
