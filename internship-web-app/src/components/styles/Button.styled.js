import styled from "styled-components";

export const StyledButton = styled.button`
    border-radius: 8px;
    border: 1px solid grey;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    background-color: #2F65B0;
    color: white;
    margin: 1em 0;

    &:hover {
        background-color: #357BC2
    }

    a {
        display: block;
        width: 100%;
        height: 100%;
        padding: 12px 20px;
        color: inherit;
    }
`

export const GreenStyledButton = styled(StyledButton)`
    background-color: #218838;
`

export const RedStyledButton_Green = styled(StyledButton)`
    background-color: #DC3545;
`