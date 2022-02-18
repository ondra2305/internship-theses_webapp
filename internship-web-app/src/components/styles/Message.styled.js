import styled from "styled-components";

export const StyledMessage = styled.div`
    background-color: #EEEEEE;
    padding: 1em 1em;
    text-align: center;
    border: 1px solid grey;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 1em 0;
`
export const StyledMessage_Alert = styled(StyledMessage)`
    background-color: rgba(220, 53, 69, 0.2);
    color: #DC3545;
    font-weight: bold;

    &:before {
        content: "";
    }
`