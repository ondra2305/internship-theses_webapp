import React from 'react'
import { StyledHeader } from "./styles/Header.styled"
import { Nav } from "./styles/Header.styled"
import { Logo } from "./styles/Logo.styled"
import { Menu } from "./styles/NavElements.styled"
import { MenuLink } from "./styles/NavElements.styled"
import { Container } from './styles/Container.styled'

export default function Header() {
  return (
    <StyledHeader>
        <Container>
            <Nav>
                <Logo src="./images/logo.svg" alt="PSLIB logo"/>
                <Container>
                    <h1>Správa PraXí</h1>
                    <Menu>
                        <MenuLink to="/home"><a href="../pages/home.js"><i class="fa-solid fa-house"></i> Domů</a></MenuLink>
                        <MenuLink to="/internship"><a href="../pages/internship.js"><i class="fa-solid fa-briefcase"></i> Praxe</a></MenuLink>
                        <MenuLink to="/diary"><a href="../pages/diary.js"><i class="fa-solid fa-book-open"></i> Deník</a></MenuLink>
                        <MenuLink to="/bonus"><a href="../pages/bonus.js"><i class="fa-solid fa-star"></i> Zlepšováky</a></MenuLink>
                    </Menu>
                </Container>
            </Nav>
        </Container>
    </StyledHeader>
  )
}