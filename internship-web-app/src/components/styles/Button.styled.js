import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    border-radius: 8px;
    border: 1px solid grey;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    font-size: 16px;
    background-color: #2F65B0;
    color: white;
    margin: 1em .5em;
    vertical-align: middle;

    &:hover {
        background-color: #357BC2
    }

    a {
        display: block;
        width: 100%;
        height: 100%;
        color: inherit;
        vertical-align: middle;
        padding: 20px 12px;
        line-height: 1;
        white-space: nowrap;
        text-decoration: none;
    }

    ${props => props.Red && css`
        background-color: #DC3545;

        &:hover {
            background-color: rgba(220, 53, 69, 0.8)
        }
    `}

    ${props => props.Green && css`
    background-color: #218838;

    &:hover {
        background-color: rgba(25, 135, 84, 0.8)
    }
    `}

    ${props => props.Grey && css`
    background-color: #A9A9A9;

    &:hover {
        background-color: rgba(169, 169, 169, 0.8)
    }
    `}
`

export const GreenStyledButton = styled(StyledButton)`
    background-color: #218838;

    &:hover {
        background-color: rgba(25, 135, 84, 0.8)
    }
`

export const RedStyledButton = styled(StyledButton)`
    background-color: #DC3545;

    &:hover {
        background-color: rgba(220, 53, 69, 0.8)
    }
`