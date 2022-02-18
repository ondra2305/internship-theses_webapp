import styled from "styled-components";

export const Block = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 16px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        gap: 0;
    }
`