import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        margin: 0;
        background-color: ${({ theme }) => theme.bodyBackground};
        color: ${({ theme }) => theme.textColor};
        height: 100vh;
    }

    p {
        line-height: 1;
        margin: .5rem 0;
    }

    h1 {
        font-size: 32px;
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
        font-size: 24px;
        margin-top: 1em;
        margin-bottom: 0;
        padding: .5rem;
        border-bottom: 1px solid black;
        text-transform: uppercase;
    }
`

export default GlobalStyles