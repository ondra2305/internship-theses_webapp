import React from 'react'

import Nav from './Nav'
import AccountInfo from './AccountInfo'

import { StyledHeader } from "./styles/Header.styled"
import { NavContainer } from "./styles/NavElements.styled"
import { NavBlock } from "./styles/NavElements.styled"
import { Logo, LogoFull } from "./styles/Logo.styled"
import { Container } from './styles/Container.styled'

export default function Header() {
  return (
    <StyledHeader>
        <Container>
            <NavBlock>
                <NavContainer>
                    <h1><Logo src="./images/logo.svg" alt="PSLIB logo"/> Správa Praxí</h1>
                    <Nav />     
                </NavContainer>
                <AccountInfo />
            </NavBlock>
        </Container>
    </StyledHeader>
  )
}