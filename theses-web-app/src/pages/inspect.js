import { Container } from "../components/styles/Container.styled"
import { StyledCard } from "../components/styles/Card.styled"
import { StyledTable } from "../components/styles/Table.styled"
import { StyledButton } from "../components/styles/Button.styled"
import { StyledLink } from "../components/styles/Link.styled"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Inspect = () => {
  return (
      <>
      <Container>
          <StyledCard>
            <h2>Praxe #0000</h2>
            <StyledTable NoBorder Symetric Bold>
              <tbody>
              <tr>
                  <td>Informace</td>
                  <td>Toto je pouze testovací hodnocení práce.</td>
                </tr>
                <tr>
                  <td>Hodnocení</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Datum</td>
                  <td>22.2.2022</td>
                </tr>
              </tbody>
            </StyledTable>
            <StyledButton><StyledLink to=""><FontAwesomeIcon icon={solid('pen')} /> Upravit</StyledLink></StyledButton>
            <StyledButton Red><StyledLink to=""><FontAwesomeIcon icon={solid('trash-can')} /> Smazat</StyledLink></StyledButton>
            <StyledButton Grey><StyledLink to="/teacherHome"><FontAwesomeIcon icon={solid('arrow-left')} /> Zpět</StyledLink></StyledButton>
          </StyledCard>
      </Container>
      </>
  )
}

export default Inspect