import styled from "styled-components";
import { Button } from "antd";
import { Color } from "../../../ui";

const StyledLoading = styled(Button)`
  width: 100%;
  min-height: 53px;

  background: ${Color.Primary};
  border-radius: 10px;
  text-align: center;

  color: ${Color.White};
`;

export { StyledLoading };
