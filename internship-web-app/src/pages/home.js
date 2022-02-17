import { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import {Container} from "../components/styles/Container.styled"
import GlobalStyles from "../components/styles/Global"

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
        <h1>Aplikace PraXe</h1>
      </Container>
      </>
    </ThemeProvider>
  )
}

export default Home