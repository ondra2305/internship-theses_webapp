import { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import { Container } from "../components/styles/Container.styled"
import GlobalStyles from "../components/styles/Global"
import { StyledCard } from "../components/styles/Card.styled"
import { StyledButton } from "../components/styles/Button.styled"
import { Logo, LogoFull } from "../components/styles/Logo.styled"
import { MenuLink } from "../components/styles/NavElements.styled"

const theme = {
  colors: {
    header: "#EEEEEE",
  },
}

const Login = () => {
  return (
    <ThemeProvider theme = {theme}> 
      <>
      <GlobalStyles />
      <Header />
      <Container>
        <StyledCard>
          <LogoFull src="./images/logo-full.svg"/>
          <h2>Správa Praxí</h2>
          <p>Školní aplikace na správu Praxí</p>
          <p>Pro přístup se prosím přihlaste.</p>
          <StyledButton to="/home"><MenuLink to="/home">Přihlásit se</MenuLink></StyledButton>
        </StyledCard>
      </Container>
      </>
    </ThemeProvider>
  )
}

export default Login