import Table from 'react-bootstrap/Table'
import { Container } from "../components/styles/Container.styled"
import { StyledTable } from "../components/styles/Table.styled"
import { StyledTableHead, StyledTableFoot } from "../components/styles/Table.styled"

import { StyledButton } from "../components/styles/Button.styled"
import { StyledMessage } from "../components/styles/Message.styled"
import { Flex } from "../components/styles/Flex.styled"
import SearchBox from '../components/SearchBox'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const TeacherInternship = () => {
  return (
      <>
      <Container>
        <h2>Seznam praxí</h2>
        <Flex>
          <SearchBox/>
          <div>
            <StyledButton Green><a><FontAwesomeIcon icon={solid('circle-plus')} /> Přidat</a></StyledButton>
            <StyledButton Grey><a><FontAwesomeIcon icon={solid('circle-plus')} /> Přidat firmu</a></StyledButton>
            <StyledButton Grey><a><FontAwesomeIcon icon={solid('circle-plus')} /> Přidat adresu</a></StyledButton>
          </div>
        </Flex>
        <StyledTable>
          <StyledTableHead>
            <tr>
              <th>Firma</th>
              <th>Adresa</th>
              <th>Typ praxe</th>
              <th>Student</th>
              <th>Akce</th>
            </tr>
          </StyledTableHead>
          <tbody>
            <tr>
              <td>Microsoft s.r.o.</td>
              <td>Vyskočilova 1561/4a, 14000 Praha 4</td>
              <td>Dlouhodobé praxe 4. ročníků</td>
              <td>Ondřej Svoboda</td>
              <td><StyledButton Green><a href="#"><FontAwesomeIcon icon={solid('circle-plus')} />  Přidat se</a></StyledButton></td>
            </tr>
            <tr>
              <td>Další firma</td>
              <td>Další adresa</td>
              <td>Dlouhodobé praxe 4. ročníků</td>
              <td>Další student</td>
              <td><StyledButton Green><a href="#"><FontAwesomeIcon icon={solid('circle-plus')} /> Přidat se</a></StyledButton></td>
            </tr>
            <tr>
            <td>Další firma</td>
              <td>Další adresa</td>
              <td>Dlouhodobé praxe 4. ročníků</td>
              <td>Další student</td>
              <td><StyledButton Green><a href="#"><FontAwesomeIcon icon={solid('circle-plus')} /> Přidat se</a></StyledButton></td>
            </tr>
            <tr>
            <td>Další firma</td>
              <td>Další adresa</td>
              <td>Dlouhodobé praxe 4. ročníků</td>
              <td>Další student</td>
              <td><StyledButton Green><a href="#"><FontAwesomeIcon icon={solid('circle-plus')} /> Přidat se</a></StyledButton></td>
            </tr>
            <tr>
            <td>Další firma</td>
              <td>Další adresa</td>
              <td>Dlouhodobé praxe 4. ročníků</td>
              <td>Další student</td>
              <td><StyledButton Green><a href="#"><FontAwesomeIcon icon={solid('circle-plus')} /> Přidat se</a></StyledButton></td>
            </tr>
          </tbody>
          <StyledTableFoot>
            <tr>
              <td>Firma</td>
              <td>Adresa</td>
              <td>Typ praxe</td>
              <td>Student</td>
              <td>Akce</td>
            </tr>
          </StyledTableFoot>
        </StyledTable>
      </Container>
      </>
  )
}

export default TeacherInternship