import { css } from "styled-components";
import { Media } from "./index";

const H1 = css`
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;

  ${Media.MD} {
    font-size: 32px;
    line-height: 48px;
  }

  ${Media.SM} {
    font-size: 28px;
    line-height: 42px;
  }
`;

const H2 = css`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  ${Media.SM} {
    font-size: 20px;
    line-height: 36px;
  }
`;

const H3 = css`
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;

  ${Media.SM} {
    font-size: 18px;
    line-height: 28px;
  }
`;

const S1_1 = css`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;

const S1_2 = css`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const S1_3 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const Body = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export { H1, H2, H3, S1_1, S1_2, S1_3, Body };
