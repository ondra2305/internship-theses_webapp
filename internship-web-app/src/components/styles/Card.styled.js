import styled, {css} from "styled-components";

export const StyledCard = styled.div`
    background-color: ${({ theme }) => theme.cardBg};
    padding: 1em 1em;
    max-width: 600px;
    margin: 1em auto;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.cardBorder};
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

    section {
        display: flex;
        gap: 1em;
        align-items: center;
    }

    ${props => props.Big && css`
        max-width: 1000px;
        
        p, h3 {
            text-align: left;
        }
    `}

    ${props => props.Margin && css`
        margin-top: 3em;
        margin-bottom: 3em;
`}
`

export const CardSection = styled.section`
    display: flex;
    flex-direction: row;

    div {
        display: block;
        text-align: left;
    }

    @media (max-width: 600px) {
        flex-direction: column;
    }
`