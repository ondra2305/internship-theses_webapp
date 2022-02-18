import React from 'react'
import { StyledSearchBox } from './styles/SearchBox.styled'
import { StyledButton } from "./styles/Button.styled"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function SearchBox() {
  return (
    <StyledSearchBox>
        <input placeholder="Hledat" name="hledat"></input><StyledButton type="submit">
        <FontAwesomeIcon icon={solid('magnifying-glass')} /></StyledButton>
    </StyledSearchBox>
  )
}