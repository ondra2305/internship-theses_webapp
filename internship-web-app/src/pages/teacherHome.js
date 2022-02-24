import SearchBox from "../components/SearchBox"

import { StyledCard } from "../components/styles/Card.styled"
import { StyledButton} from "../components/styles/Button.styled"
import { Container } from "../components/styles/Container.styled"
import { Flex } from "../components/styles/Flex.styled"
import { StyledLink } from "../components/styles/Link.styled"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const TeacherHome = () => {
  return (
      <>
      <Container>
          <h2>Správa praxí</h2>
          <SearchBox/>
          <StyledCard Left>
            <h3>MICROSOFT s.r.o.</h3>
            <Flex>
            <p>Ondřej Svoboda <StyledButton Small Grey><StyledLink to="/inspect"><FontAwesomeIcon icon={solid('arrow-right')} /> Podrobnosti</StyledLink></StyledButton><StyledButton Small><StyledLink to="/teacherInternship"><FontAwesomeIcon icon={solid('arrow-right')} /> Praxe</StyledLink></StyledButton>
            </p>
            </Flex>
          </StyledCard>
          <StyledCard Left>
            <h3>MICROSOFT s.r.o.</h3>
            <Flex>
            <p>Ondřej Svoboda <StyledButton Small Grey><StyledLink to="/inspect"><FontAwesomeIcon icon={solid('arrow-right')} /> Podrobnosti</StyledLink></StyledButton><StyledButton Small><StyledLink to="/teacherInternship"><FontAwesomeIcon icon={solid('arrow-right')} /> Praxe</StyledLink></StyledButton></p>
            </Flex>
          </StyledCard>
          <StyledCard Left>
            <h3>MICROSOFT s.r.o.</h3>
            <Flex>
            <p>Ondřej Svoboda <StyledButton Small Grey><StyledLink to="/inspect"><FontAwesomeIcon icon={solid('arrow-right')} /> Podrobnosti</StyledLink></StyledButton><StyledButton Small><StyledLink to="/teacherInternship"><FontAwesomeIcon icon={solid('arrow-right')} /> Praxe</StyledLink></StyledButton></p>
            </Flex>
          </StyledCard>
      </Container>
      </>
  )
}

export default TeacherHome