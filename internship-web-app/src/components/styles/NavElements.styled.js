import styled from "styled-components"
import { NavLink as Link } from "react-router-dom";

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    gap: 16px;

    h1 {
        font-size: 2em;
        font-weight: bold;
        margin: .5em 0;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 480px) {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        overflow-x: scroll;
    }
`
export const NavContainer = styled.div`
`

export const Menu = styled.ul`
    list-style-type: none;
    padding: 0;
    display: inline-flex;
    align-items: center;
    margin-bottom: 0;
`
export const MenuLink = styled(Link)`
    background-color: #2F65B0;
    color: white;
    text-decoration: none;
    text-align: center;
    display: block;
    height: 100%;
    text-decoration: none;
    padding: 12px;
    color: white;

    &:hover {
        background-color: #357BC2;
        color: white;
    }
`

export const NavBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 16px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        gap: 0;
    }
`