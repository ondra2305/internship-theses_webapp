import styled, {css} from "styled-components";

export const Container = styled.div`
    width: 1600px;
    max-width: 100vw;
    overflow: hidden;
    padding: .5em 1em;
    margin: 0 auto;

    @media (max-width: 480px) {
        padding: .5em .5em;
    }

    ${props => props.Full && css`
    height: 100vh;
`}
`

