import styled from "styled-components";
import { H2, S1_2, S1_3 } from "../../ui";

const FormName = styled.h2`
  ${H2}
`;

const FieldName = styled.p`
  ${S1_3}
`;

const Note = styled.p`
  ${S1_2};

  font-weight: 500;
`;

export { FormName, FieldName, Note };
