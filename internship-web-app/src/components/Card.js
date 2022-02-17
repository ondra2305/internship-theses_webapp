import React from 'react'
import { StyledCard } from './styles/Card.styled'
import { StyledButton } from "../components/styles/Button.styled"
import { Logo } from "../components/styles/Logo.styled"
import { MenuLink } from "./styles/NavElements.styled"

export default function Card() {
  return (
    <StyledCard>
      <Logo src="./images/logo-full.svg"/>
      <h1>Správa Praxí</h1>
      <p>Školní aplikace na správu Praxí</p>
      <p>Pro přístup se prosím přihlaste.</p>
      <StyledButton to="/home"><MenuLink to="/home">Přihlásit se</MenuLink></StyledButton>
    </StyledCard>
  )
}