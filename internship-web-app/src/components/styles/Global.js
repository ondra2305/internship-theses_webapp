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
        margin: 1rem 0;
    }

    h1 {
        font-size: 24px;
        font-weight: bold;
        margin: 1rem 0;
    }

    h2 {
        font-weight: bold;
        font-size: 36px;
        margin: 1rem 0;
    }

    h3 {
        font-weight: semibold;
        font-size: 20px;
        margin: .5rem 0;
    }
`

export default GlobalStyles