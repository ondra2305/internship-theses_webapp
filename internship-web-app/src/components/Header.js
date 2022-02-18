import React from 'react'
import { StyledHeader } from "./styles/Header.styled"
import { Nav } from "./styles/NavElements.styled"
import { NavContainer } from "./styles/NavElements.styled"
import { Logo, LogoFull } from "./styles/Logo.styled"
import { Menu } from "./styles/NavElements.styled"
import { MenuLink } from "./styles/NavElements.styled"
import { Container } from './styles/Container.styled'
import { SearchBox } from './styles/SearchBox.styled'
import { StyledButton } from './styles/Button.styled'
import { Box } from "./styles/Box.styled"
import { Block } from "./styles/Block.styled"
import { AccountInfo } from "./styles/AccountInfo.styled"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Header() {
  return (
    <StyledHeader>
        <Container>
            <Block>
                <NavContainer>
                    <h1><Logo src="./MP2021-22_Svoboda-Ondrej_Sjednoceni-uzivatelskych-rozhrani-www-aplikaci-PraCe-a-PraXe/images/logo.svg" alt="PSLIB logo"/> Správa Praxí</h1>
                    <Nav>
                        <Box>
                                <Menu>
                                    <MenuLink to="/home"><FontAwesomeIcon icon={solid('house')} /> Domů</MenuLink>
                                    <MenuLink to="/internship"><FontAwesomeIcon icon={solid('briefcase')} /> Praxe</MenuLink>
                                    <MenuLink to="/diary"><FontAwesomeIcon icon={solid('book-open')} /> Deník</MenuLink>
                                    <MenuLink to="/bonus"><FontAwesomeIcon icon={solid('star')} /> Zlepšováky</MenuLink>
                                    <MenuLink to="/map"><FontAwesomeIcon icon={solid('map')} /> Mapa</MenuLink>
                                    <MenuLink to="/example"><FontAwesomeIcon icon={brands('react')} /> Example</MenuLink>
                                </Menu>
                        </Box>        
                    </Nav>
                </NavContainer>
                <AccountInfo>
                    <Box>
                        <div>
                            <p>
                                Jan Novák<br/>jan.novak@pslib.cz
                            </p>
                        </div>
                        <div>
                            <StyledButton><MenuLink to="/">Odhlásit se</MenuLink></StyledButton>
                            <StyledButton><MenuLink to="/account"><FontAwesomeIcon icon={solid('user')} /> Účet</MenuLink></StyledButton>
                        </div>
                    </Box>
                    <Box>
                        <SearchBox><input placeholder="Hledat" name="hledat"></input><StyledButton type="submit"><FontAwesomeIcon icon={solid('magnifying-glass')} /></StyledButton></SearchBox>
                    </Box>
            </AccountInfo>
            </Block>
        </Container>
    </StyledHeader>
  )
}