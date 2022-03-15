import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    form {
        align-self: flex-end;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        text-align: left;

        form {
            align-self: flex-start;
        }

        button {
            margin: 0.5em;
        }
    }
`

