import styled from "styled-components";
import { Color } from "../../ui";

const StyledAvatar = styled.div`
  min-height: 56px;
  min-width: 56px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Color.Primary};

  color: ${Color.White};
  font-size: 20px;
  font-weight: 700;
`;

export { StyledAvatar };
