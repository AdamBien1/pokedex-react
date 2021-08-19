import { createGlobalStyle } from "styled-components";
import PressStart2P from "../assets/Fonts/PressStart2P-Regular.ttf"

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: "PressStart2P";
        src: url(${PressStart2P}) format("truetype");
        font-weight: normal;
        font-style: normal;
    }
`