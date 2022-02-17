import styled from "styled-components"
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`

export const Menu = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
`
export const MenuLink = styled(Link)`
    background-color: #2F65B0;
    color: white;
    text-decoration: none;

    a {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: inherit;
        padding: 1em;
}
`