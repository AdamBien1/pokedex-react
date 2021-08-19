import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        /* background-color: #f4f4f4; */
    }

    ul, ol {
        list-style: none;
    }
`