import styled from "styled-components"
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
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
`

export const Menu = styled.ul`
    list-style-type: none;
    padding: 0;
    display: inline-flex;
    align-items: center;
    margin-bottom: 0;

    @media (max-width: 480px) {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        overflow-x: scroll;
    }
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
    }
`