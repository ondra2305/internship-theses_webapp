import { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import { Container } from "../components/styles/Container.styled"
import GlobalStyles from "../components/styles/Global"
import Card from "../components/Card"

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
        <Card />
      </Container>
      </>
    </ThemeProvider>
  )
}

export default Internship