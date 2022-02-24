import { StyledCard } from "../components/styles/Card.styled"
import { StyledButton } from "../components/styles/Button.styled"
import { StyledMessage } from "../components/styles/Message.styled"
import { StyledTable } from "../components/styles/Table.styled"
import { StyledTableHead } from "../components/styles/Table.styled"
import { Box } from "../components/styles/Box.styled"
import SearchBox from "../components/SearchBox"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Container } from "../components/styles/Container.styled"

const Example = () => {
  return (
      <>
      <Container>
        <StyledMessage>Message komponenta</StyledMessage>
        <StyledMessage Alert><FontAwesomeIcon icon={solid('triangle-exclamation')} /> Chybová Message komponenta</StyledMessage>
        <StyledMessage Warn><FontAwesomeIcon icon={solid('circle-exclamation')} /> Varovná Message komponenta</StyledMessage>
        <StyledCard Big>
          <h2>Card komponenta</h2>
            <div>
                <SearchBox/>
                <p>Searchbox komponenta</p>
            </div>
            <br/>
            <StyledTable NoBorder>
                <StyledTableHead>
                    <tr>
                        <td colspan="2">TableNoBorder komponenta</td>
                    </tr>
                </StyledTableHead>
                <tbody>
                    <tr>
                        <td><FontAwesomeIcon icon={solid('circle-user')} /> Jméno</td>
                        <td>Jan Novák</td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={solid('envelope')} /> Email</td>
                        <td>jan.novak@pslib.cz</td>
                    </tr>
                </tbody>
            </StyledTable>
            <br/>
            <StyledTable>
                <StyledTableHead>
                    <tr>
                        <td colspan="2">Table komponenta</td>
                    </tr>
                </StyledTableHead>
                <tbody>
                    <tr>
                        <td><FontAwesomeIcon icon={solid('circle-user')} /> Jméno</td>
                        <td>Jan Novák</td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={solid('envelope')} /> Email</td>
                        <td>jan.novak@pslib.cz</td>
                    </tr>
                </tbody>
            </StyledTable>
            <br/>
            <Box>
            <StyledButton to="/example"><a href="./example.js">Button komponenta</a></StyledButton>
            <StyledButton Red to="/example"><a href="./example.js">Červená Button komponenta</a></StyledButton>
            <StyledButton Green to="/example"><a href="./example.js">Zelená Button komponenta</a></StyledButton>
            </Box>
        </StyledCard>
      </Container>
      </>
  )
}

export default Example