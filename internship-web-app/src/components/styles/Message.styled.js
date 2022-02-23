import styled, {css} from "styled-components";

export const StyledMessage = styled.div`
    background-color: #EEEEEE;
    padding: 1em 1em;
    text-align: center;
    border: 1px solid grey;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 1em 0;
    font-weight: bold;

    ${props => props.Alert && css`
        background-color: rgba(220, 53, 69, 0.3);
        color: #DC3545;
        font-weight: bold;

        &:before {
            content: "";
        }
    `}

    ${props => props.Warn && css`
        background-color: rgba(255, 193, 7, 0.2);
        color: #FFC107;
        font-weight: bold;

        &:before {
            content: "";
        }
    `}
`