import styled from "styled-components";

export const StyledCard = styled.div`
    background-color: #EEEEEE;
    padding: 1em 1em;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    border: 1px solid grey;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

    section {
        display: flex;
        gap: 1em;
        align-items: center;
    }
`

export const CardSection = styled.section`
    display: block;

    div {
        display: flex;
        gap: 1em;
    }

    @media (max-width: 600px) {
        div {
            display: block;
        }
    }
`

export const BigStyledCard = styled(StyledCard)`
    max-width: 1000px;
    
    p, h3 {
        text-align: left;
    }
`