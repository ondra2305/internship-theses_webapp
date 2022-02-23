import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../global"

import Header from "../components/Header"
import {Container} from "../components/styles/Container.styled"
import Table from 'react-bootstrap/Table'

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
        <h2>Seznam praxí</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      </>
    </ThemeProvider>
  )
}

export default Internship