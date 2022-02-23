import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  ${(props) => {
    switch (props.$theme) {
      case "dark":
        return css`
            background-color: black;
            color: white;
        `;
      default:
        return css`
            background-color: #EEEEEE;
            color: black;
        `;
    }
  }}
`;
