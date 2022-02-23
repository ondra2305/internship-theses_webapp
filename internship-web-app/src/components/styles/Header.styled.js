import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.headerBackground};;
    color: ${({ theme }) => theme.textColor};
`;
