import styled from "styled-components";

export const StyledButton = styled.button`
    border-radius: 8px;
    border: 1px solid grey;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 20px;
    padding: 12px 20px;
    background-color: #2F65B0;
    color: white;
    margin: 1em 0;

    &:hover {
        opacity: 0.8;
    }
`