import { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import { Container } from "../components/styles/Container.styled"
import GlobalStyles from "../components/styles/Global"
import { StyledCard } from "../components/styles/Card.styled"
import { StyledButton, RedStyledButton, GreenStyledButton } from "../components/styles/Button.styled"
import { StyledMessage, StyledMessage_Alert, StyledMessage_Warn } from "../components/styles/Message.styled"
import { StyledTable, StyledTable_NoBorder } from "../components/styles/Table.styled"
import { StyledTableHead } from "../components/styles/Table.styled"
import { Box } from "../components/styles/Box.styled"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const theme = {
  colors: {
    header: "#EEEEEE",
  },
}

const Example = () => {
  return (
    <ThemeProvider theme = {theme}> 
      <>
      <GlobalStyles />
      <Header />
      <Container>
        <StyledMessage>Message komponenta</StyledMessage>
        <StyledMessage_Alert><FontAwesomeIcon icon={solid('triangle-exclamation')} /> Chybová Message komponenta</StyledMessage_Alert>
        <StyledMessage_Warn><FontAwesomeIcon icon={solid('circle-exclamation')} /> Varovná Message komponenta</StyledMessage_Warn>
        <StyledCard>
          <h2>Card komponenta</h2>
            <StyledTable_NoBorder>
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
            </StyledTable_NoBorder>
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
            <StyledButton><a>Button komponenta</a></StyledButton>
            <RedStyledButton><a>Červená Button komponenta</a></RedStyledButton>
            <GreenStyledButton><a>Zelená Button komponenta</a></GreenStyledButton>
            </Box>
        </StyledCard>
      </Container>
      </>
    </ThemeProvider>
  )
}

export default Example