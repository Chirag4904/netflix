import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding:0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background: #111;
    }
`;

export default GlobalStyles;
