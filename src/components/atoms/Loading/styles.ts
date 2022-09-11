import styled from "styled-components";
import { Button } from "antd";
import { Color } from "../../../ui";

const StyledLoading = styled(Button)`
  width: 100%;
  min-height: 33px;
  padding-top: 17px;
  padding-bottom: 15px;

  background-color: ${Color.Primary};
  border-radius: 10px;

  text-align: center;
`;

export { StyledLoading };
