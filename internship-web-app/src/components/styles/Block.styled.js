import styled from "styled-components";

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;

    @media (max-width: 768px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        width: 100%;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }
`