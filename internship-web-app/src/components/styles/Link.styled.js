import styled from "styled-components"
import { NavLink as Link } from "react-router-dom";

export const StyledLink = styled(Link)`
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