import { StyledCard } from "../components/styles/Card.styled"
import { StyledButton } from "../components/styles/Button.styled"
import { LogoFull } from "../components/styles/Logo.styled"
import { StyledLink } from "../components/styles/Link.styled"

const Login = () => {
  return (
      <>
        <StyledCard Margin>
          <LogoFull src="./MP2021-22_Svoboda-Ondrej_Sjednoceni-uzivatelskych-rozhrani-www-aplikaci-PraCe-a-PraXe/images/logo-full.svg"/>
          <h2>Správa Praxí</h2>
          <p>Školní aplikace na správu dlouhodobých prací.</p>
          <p>Pro přístup se prosím přihlaste.</p>
          <StyledButton to="/home"><StyledLink to="/home">Přihlásit se</StyledLink></StyledButton>
          <StyledButton Grey to="/teacherHome"><StyledLink to="/teacherHome">Učitel Test</StyledLink></StyledButton>
        </StyledCard>
      </>
  )
}

export default Login