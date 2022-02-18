import { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import { Container } from "../components/styles/Container.styled"
import GlobalStyles from "../components/styles/Global"

const theme = {
  colors: {
    header: "#EEEEEE",
  },
}

const Bonus = () => {
  return (
    <ThemeProvider theme = {theme}> 
      <>
      <GlobalStyles />
      <Header />
      <Container>
          <h2>Mapa</h2>
          <p>Placeholder</p>
      </Container>
      </>
    </ThemeProvider>
  )
}

export default Bonus