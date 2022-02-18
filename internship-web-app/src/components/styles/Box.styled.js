import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    justify-content: space-between;


    button {
        margin: 0;
        height: 100%;
    }

    p {
        margin: 0;
    }
    
    @media (max-width: 1024px) {
        flex-direction: column;
    }

    @media (max-width: 768px) {
        align-self: flex-start;
        align-items: flex-start;
    }

    @media (max-width: 480px) {
        flex-direction: column;
    }
`