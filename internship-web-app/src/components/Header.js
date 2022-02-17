import React from 'react'
import { StyledHeader } from "./styles/Header.styled"
import { Nav } from "./styles/NavElements.styled"
import { Logo } from "./styles/Logo.styled"
import { Menu } from "./styles/NavElements.styled"
import { MenuLink } from "./styles/NavElements.styled"
import { Container } from './styles/Container.styled'
import { SearchBox } from './styles/SearchBox.styled'
import { StyledButton } from './styles/Button.styled'
import { Box } from "./styles/Box.styled"
import { Block } from "./styles/Block.styled"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Header() {
  return (
    <StyledHeader>
        <Container>
            <Nav>
                <Box>
                    <div>
                        <h1><Logo src="./images/logo.svg" alt="PSLIB logo"/> Správa PraXí</h1>
                        <Menu>
                            <MenuLink to="/home"><FontAwesomeIcon icon={solid('house')} /> Domů</MenuLink>
                            <MenuLink to="/internship"><FontAwesomeIcon icon={solid('briefcase')} /> Praxe</MenuLink>
                            <MenuLink to="/diary"><FontAwesomeIcon icon={solid('book-open')} /> Deník</MenuLink>
                            <MenuLink to="/bonus"><FontAwesomeIcon icon={solid('star')} /> Zlepšováky</MenuLink>
                            <MenuLink to="/map"><FontAwesomeIcon icon={solid('map')} /> Mapa</MenuLink>
                        </Menu>
                    </div>
                </Box>
                <Block>
                    <Box>   
                        <div>
                            <p>Jan Novák</p>
                            <p>user@pslib.cz</p>
                        </div>
                        <StyledButton><MenuLink to="/">Odhlásit se</MenuLink></StyledButton>
                    </Box>
                    <Box>
                        <SearchBox><input placeholder="Hledat" name="hledat"></input><StyledButton type="submit"><FontAwesomeIcon icon={solid('magnifying-glass')} /></StyledButton></SearchBox>
                    </Box>
                </Block>           
            </Nav>
        </Container>
    </StyledHeader>
  )
}