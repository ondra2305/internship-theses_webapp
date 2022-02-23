import { StyledCard } from "../components/styles/Card.styled"
import { StyledButton } from "../components/styles/Button.styled"
import { StyledMessage } from "../components/styles/Message.styled"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import { StyledTable } from "../components/styles/Table.styled"
import { StyledTableHead } from "../components/styles/Table.styled"
import { Container } from "../components/styles/Container.styled"

const Account = () => {
  return (
      <>
      <Container>
        <StyledMessage Alert><FontAwesomeIcon icon={solid('triangle-exclamation')} /> Doplňte prosím chybějící údaje!</StyledMessage>
        <StyledCard>
          <h2>Správa účtu</h2>
            <StyledTable NoBorder>
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
                        <td><StyledButton><a href="#" onClick=""><FontAwesomeIcon icon={solid('pen')} /> Upravit</a></StyledButton></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={solid('phone')} /> Telefon</td>
                        <td>Nevyplněno</td>
                        <td><StyledButton><a href="#" onClick=""><FontAwesomeIcon icon={solid('pen')} /> Upravit</a></StyledButton></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={solid('location-dot')} /> Adresa</td>
                        <td>Nevyplněno</td>
                        <td><StyledButton><a href="#" onClick=""><FontAwesomeIcon icon={solid('pen')} /> Upravit</a></StyledButton></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={solid('cake-candles')} /> Datum narození</td>
                        <td>Nevyplněno</td>
                        <td><StyledButton><a href="#" onClick=""><FontAwesomeIcon icon={solid('pen')} /> Upravit</a></StyledButton></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={solid('chalkboard-user')} /> Třída</td>
                        <td>Nevyplněno</td>
                        <td><StyledButton><a href="#" onClick=""><FontAwesomeIcon icon={solid('pen')} /> Upravit</a></StyledButton></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={solid('graduation-cap')} /> Obor</td>
                        <td>Nevyplněno</td>
                        <td><StyledButton><a href="#" onClick=""><FontAwesomeIcon icon={solid('pen')} /> Upravit</a></StyledButton></td>
                    </tr>
                </tbody>
            </StyledTable>
        </StyledCard>
      </Container>
      </>
  )
}

export default Account