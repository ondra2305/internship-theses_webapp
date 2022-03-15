import SearchBox from "../components/SearchBox"

import { StyledMessage } from "../components/styles/Message.styled"
import { StyledCard } from "../components/styles/Card.styled"
import { CardSection } from "../components/styles/Card.styled"
import { StyledButton} from "../components/styles/Button.styled"
import { StyledLink } from "../components/styles/Link.styled"
import { Container } from "../components/styles/Container.styled"
import { StyledTable } from "../components/styles/Table.styled"
import { StyledTableHead } from "../components/styles/Table.styled"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Home = () => {
  return (
      <>
      <Container>
        <StyledMessage Alert>Nemáš ještě vytvořenou praxi v daném období.</StyledMessage>
        <StyledMessage Warn>Je třeba doplnit informace na vašem profilu.</StyledMessage>
        <StyledCard Big>
          <h2>Správa praxí</h2>
          <p>Vytvořte si praxi pomocí nasáledujících kroků. Kroky je, které je potřeba dodržet:</p>
          <h3>1. Doplnit informace</h3>
          <CardSection>
            <div>
              <p>Je potřeba doplnit všechny potřebné informace ve vašem profilu</p>
              <StyledButton><StyledLink to="/account">Doplnit informace</StyledLink></StyledButton>
            </div>
          </CardSection>

          <h3>2. Přidat firmu a adresu</h3>
          <CardSection>
            <div>
              <SearchBox />
              <StyledButton Green><StyledLink to="/create">Přidat firmu</StyledLink></StyledButton>
              <StyledButton Green><StyledLink to="/create">Přidat adresu</StyledLink></StyledButton>
            </div>
          </CardSection>

          <h3>3. Založit si Praxi</h3>
          <CardSection>
            <div>
              <p>Před založení praxe je nutné zkontrolovat jestli je u nás přidaná firma, kde budete praxi vykonávat.</p>
              <StyledButton><StyledLink to="/create">Založit</StyledLink></StyledButton>
            </div>
          </CardSection>
        </StyledCard>
        <StyledCard Big>
          <h2>Aktivní praxe</h2>
          <h3>Microsoft s.r.o.</h3>
          <StyledTable NoBorder Bold>
              <StyledTableHead Symetric>
                    <tr>
                        <th><FontAwesomeIcon icon={solid('building')} /> Firma: MICROSOFT s.r.o.</th>
                        <th><FontAwesomeIcon icon={solid('user')} /> Vedoucí práce: Tomáš Kazda</th>
                    </tr>
                    <tr>
                        <th><FontAwesomeIcon icon={solid('location-dot')} /> Adresa: Vyskočilova 1561/4a, Praha 4</th>
                        <th><FontAwesomeIcon icon={solid('briefcase')} /> Typ práce: Dlouhodobé práce 4. ročníků</th>
                    </tr>
              </StyledTableHead>
                <tbody>
                    <tr>
                        <td>Popis práce</td>
                        <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Integer tempor. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo.</td>
                    </tr>
                    <tr>
                        <td>Poznámky</td>
                        <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Integer tempor. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. </td>
                    </tr>
                </tbody>
            </StyledTable>
        </StyledCard>
      </Container>
      </>
  )
}

export default Home