import React from 'react'
import SearchBox from './SearchBox'

import { StyledAccountInfo } from './styles/AccountInfo.styled'
import { StyledButton } from "./styles/Button.styled"
import { Box } from './styles/Box.styled'
import { MenuLink } from "./styles/NavElements.styled"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function AccountInfo() {
  return (
    <StyledAccountInfo>
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
            <SearchBox />
        </Box>
    </StyledAccountInfo>
  )
}