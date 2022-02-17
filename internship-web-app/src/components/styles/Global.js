import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        margin: 0;
    }

    p {
        line-height: 1;
    }
`

export default GlobalStyles