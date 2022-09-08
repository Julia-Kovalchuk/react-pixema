import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { Reset } from "./reset";

export const GlobalStyle = createGlobalStyle`

${Reset}

html[data-theme="dark"] {
--primary: #7B61FF;
--primary-light:#917CFF;
--secondary: #80858B;
--theme-black:#000000;
--theme-white:#FFFFFF;
--black: #000000;
--white:#FFFFFF;
--light: #AFB2B6;
--dark: #242426;
--graphite: #323537;
--error: #FF5154;
--green : #00A340;
--yellow: #F3A608;
--orange : #F45D2D;
}

html[data-theme="light"] {
--primary: #7B61FF;
--primary-light:#917CFF;
--secondary: #80858B;
--theme-black:#FFFFFF;
--theme-white:#000000;
--black: #000000;
--white:#FFFFFF;
--light: #AFB2B6;
--dark: #242426;
--graphite:#AFB2B6;
--error: #FF5154;
--green : #00A340;
--yellow: #F3A608;
--orange : #F45D2D;
}

body {
    background: ${Color.Theme_Black};
    color: ${Color.Theme_White};
    font-family: "Exo 2", Arial, Helvetica, sans-serif;
    transition: all 0.7s;
}

`;
