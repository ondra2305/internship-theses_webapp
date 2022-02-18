import styled from "styled-components";

export const StyledSearchBox = styled.form`
    display: flex;
    align-items: center;
    gap: 0px;
    text-align: right;
    align-self: flex-end;
    width: 300px;

    input {
        padding: 10px;
        border: 1px solid grey;
        border-radius: 8px;
        width: 100%;
    }

    button {
        padding: 10px;
    }
`