import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.footerBackground};;
    color: ${({ theme }) => theme.textColor};
    display: flex;
    padding: 1em;
    margin-top auto;
    justify-content: space-between;  
`;