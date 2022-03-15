import React from 'react'
import { StyledNav } from './styles/NavElements.styled'
import { Menu } from './styles/NavElements.styled'
import { MenuLink } from './styles/NavElements.styled'
import { Box } from "./styles/Box.styled"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Nav() {
  return (
    <StyledNav>
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
    </StyledNav>
  )
}