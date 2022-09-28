import { EmptyIcon } from "assets";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, H3, H4, H6, Media } from "ui";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 75vh;
`;

const StyledEmptyIcon = styled(EmptyIcon)`
  margin-left: -202px;

  ${Media.MD} {
    width: 336px;
    height: 293px;
    margin-left: 0px;
  }

  ${Media.SM} {
    width: 202px;
    height: 177px;
  }
`;

const Text = styled.p`
  margin-top: 15px;
  margin-left: -202px;
  ${H6};
  color: ${Color.Secondary};

  ${Media.MD} {
    margin-left: 0px;
  }
`;

const CustomLink = styled(Link)`
  color: ${Color.PrimaryLight};

  &:hover {
    color: ${Color.Primary};
  }

  &:active {
    color: ${Color.PrimaryLight};
  }

  &:disabled {
    color: ${Color.Light};
  }
`;

export { Wrapper, StyledEmptyIcon, Text, CustomLink };
