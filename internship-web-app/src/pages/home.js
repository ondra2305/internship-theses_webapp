import { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import SearchBox from "../components/SearchBox"

import GlobalStyles from "../components/styles/Global"
import {Container} from "../components/styles/Container.styled"
import { StyledMessage, StyledMessage_Alert, StyledMessage_Warn } from "../components/styles/Message.styled"
import { BigStyledCard } from "../components/styles/Card.styled"
import { CardSection } from "../components/styles/Card.styled"
import { StyledButton, GreenStyledButton } from "../components/styles/Button.styled"
import { StyledLink } from "../components/styles/Link.styled"

const theme = {
  colors: {
    header: "#EEEEEE",
  },
}

const Home = () => {
  return (
    <ThemeProvider theme = {theme}> 
      <>
      <GlobalStyles />
      <Header />
      <Container>
        <StyledMessage_Alert>Nemáš ještě vytvořenou praxi v daném období.</StyledMessage_Alert>
        <StyledMessage_Warn>Je třeba doplnit informace na vašem profilu.</StyledMessage_Warn>
        <BigStyledCard>
          <h2>Správa praxí</h2>
          <p>Vytvořte si praxi pomocí nasáledujících kroků. Kroky je, které je potřeba dodržet:</p>
          <h3>1. Doplnit informace</h3>
          <CardSection>
              <p>Je potřeba doplnit všechny potřebné informace ve vašem profilu</p>
            <div>
              <StyledButton><StyledLink to="/account">Doplnit informace</StyledLink></StyledButton>
            </div>
          </CardSection>

          <h3>2. Přidat firmu a adresu</h3>
          <CardSection>
            <div>
              <SearchBox />
              <GreenStyledButton><a>Přidat firmu</a></GreenStyledButton>
              <GreenStyledButton><a>Přidat adresu</a></GreenStyledButton>
            </div>
          </CardSection>

          <h3>3. Založit si Praxi</h3>
          <CardSection>
            <p>Před založení praxe je nutné zkontrolovat jestli je u nás přidaná firma, kde budete praxi vykonávat.</p>
            <StyledButton><StyledLink to="/internship">Založit</StyledLink></StyledButton>
          </CardSection>
        </BigStyledCard>
      </Container>
      </>
    </ThemeProvider>
  )
}

export default Home