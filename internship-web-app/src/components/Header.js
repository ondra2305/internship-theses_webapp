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
                    <h1><Logo src="./MP2021-22_Svoboda-Ondrej_Sjednoceni-uzivatelskych-rozhrani-www-aplikaci-PraCe-a-PraXe/images/logo.svg" alt="PSLIB logo"/> Správa Praxí</h1>
                    <Nav />     
                </NavContainer>
                <AccountInfo />
            </NavBlock>
        </Container>
    </StyledHeader>
  )
}