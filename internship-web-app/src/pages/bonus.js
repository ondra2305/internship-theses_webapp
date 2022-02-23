import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../global"

import Header from "../components/Header"
import { Container } from "../components/styles/Container.styled"

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
          <h2>Bonus</h2>
          <p>Placeholder</p>
      </Container>
      </>
    </ThemeProvider>
  )
}

export default Bonus