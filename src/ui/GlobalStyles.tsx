import { createGlobalStyle } from "styled-components";
import { Color } from "./index";
import { Reset } from "./reset";
import { ThemeColors } from "./theme";

export const GlobalStyle = createGlobalStyle`

${Reset}

${ThemeColors}

body {
    background: ${Color.Theme_Black};
    color: ${Color.Theme_White};
    font-family: "Exo 2", Arial, Helvetica, sans-serif;
    transition: all 0.7s;
}

`;
