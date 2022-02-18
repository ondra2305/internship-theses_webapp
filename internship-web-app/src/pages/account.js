import { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import { Container } from "../components/styles/Container.styled"
import GlobalStyles from "../components/styles/Global"
import { StyledCard } from "../components/styles/Card.styled"
import { StyledButton } from "../components/styles/Button.styled"
import { StyledMessage, StyledMessage_Alert } from "../components/styles/Message.styled"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

import Table from "../components/Table"
import { StyledTable_NoBorder } from "../components/styles/Table.styled"
import { StyledTableHead } from "../components/styles/Table.styled"

const theme = {
  colors: {
    header: "#EEEEEE",
  },
}

const Account = () => {
  return (
    <ThemeProvider theme = {theme}> 
      <>
      <GlobalStyles />
      <Header />
      <Container>
        <StyledMessage_Alert><FontAwesomeIcon icon={solid('triangle-exclamation')} /> Doplňte prosím chybějící údaje!</StyledMessage_Alert>
        <StyledCard>
          <h2>Správa účtu</h2>
          <h3>Osobní údaje</h3>
            <StyledTable_NoBorder>
                <StyledTableHead>
                    <tr>
                        <td>Osobní údaje</td>
                    </tr>
                </StyledTableHead>
                <tbody>
                    <tr>
                        <td><FontAwesomeIcon icon={solid('circle-user')} /> Jméno</td>
                        <td>Jan Novák</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={solid('envelope')} /> Email</td>
                        <td>jan.novak@pslib.cz</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={solid('venus-mars')} /> Pohlaví</td>
                        <td>Muž</td>
                        <td><StyledButton><a onclick=""><FontAwesomeIcon icon={solid('pen')} /> Upravit</a></StyledButton></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={solid('phone')} /> Telefon</td>
                        <td>Nevyplněno</td>
                        <td><StyledButton><a onclick=""><FontAwesomeIcon icon={solid('pen')} /> Upravit</a></StyledButton></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={solid('location-dot')} /> Adresa</td>
                        <td>Nevyplněno</td>
                        <td><StyledButton><a onclick=""><FontAwesomeIcon icon={solid('pen')} /> Upravit</a></StyledButton></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={solid('cake-candles')} /> Datum narození</td>
                        <td>Nevyplněno</td>
                        <td><StyledButton><a onclick=""><FontAwesomeIcon icon={solid('pen')} /> Upravit</a></StyledButton></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={solid('chalkboard-user')} /> Třída</td>
                        <td>Nevyplněno</td>
                        <td><StyledButton><a onclick=""><FontAwesomeIcon icon={solid('pen')} /> Upravit</a></StyledButton></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={solid('graduation-cap')} /> Obor</td>
                        <td>Nevyplněno</td>
                        <td><StyledButton><a onclick=""><FontAwesomeIcon icon={solid('pen')} /> Upravit</a></StyledButton></td>
                    </tr>
                </tbody>
            </StyledTable_NoBorder>
        </StyledCard>
      </Container>
      </>
    </ThemeProvider>
  )
}

export default Account