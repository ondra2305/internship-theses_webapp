import { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import {Container} from "../components/styles/Container.styled"
import GlobalStyles from "../components/styles/Global"

const theme = {
  colors: {
    header: "#EEEEEE",
  },
}

const Internship = () => {
  return (
    <ThemeProvider theme = {theme}> 
      <>
      <GlobalStyles />
      <Header />
      <Container>
        <h1>Praxe</h1>
      </Container>
      </>
    </ThemeProvider>
  )
}

export default Internship