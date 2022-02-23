import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    ${(props) => {
        switch (props.$theme) {
          case "dark":
            return css`
                body {
                    font-family: 'Open Sans', sans-serif;
                    font-size: 16px;
                    margin: 0;
            
                }
            `;
          default:
            return css`
                body {
                    font-family: 'Open Sans', sans-serif;
                    font-size: 16px;
                    margin: 0;
                }
            `;
        }
      }}

    p {
        line-height: 1;
        margin: 1rem 0;
    }

    h1 {
        font-size: 32px;
        font-weight: bold;
        margin: 1rem 0;
    }

    h2 {
        font-weight: bold;
        font-size: 36px;
        margin: 1.5rem 0;
    }

    h3 {
        font-weight: semibold;
        font-size: 24px;
        margin: .5rem 0;
        padding: .5rem;
        border-bottom: 1px solid black;
        text-transform: uppercase;
    }
`

export default GlobalStyles