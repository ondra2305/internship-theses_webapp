import { StyledCard } from "../components/styles/Card.styled"
import { StyledButton } from "../components/styles/Button.styled"
import { LogoFull } from "../components/styles/Logo.styled"
import { MenuLink } from "../components/styles/NavElements.styled"

const Login = () => {
  return (
      <>
        <StyledCard>
          <LogoFull src="./MP2021-22_Svoboda-Ondrej_Sjednoceni-uzivatelskych-rozhrani-www-aplikaci-PraCe-a-PraXe/images/logo-full.svg"/>
          <h2>Správa Praxí</h2>
          <p>Školní aplikace na správu Praxí</p>
          <p>Pro přístup se prosím přihlaste.</p>
          <StyledButton to="/home"><MenuLink to="/home">Přihlásit se</MenuLink></StyledButton>
        </StyledCard>
      </>
  )
}

export default Login