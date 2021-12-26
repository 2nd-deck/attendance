import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-router-dom";

const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    .logo {
        padding: 15px 0;
        color: #48484d;
        font-size: 25px;
        font-weight: 600;
        text-decoration: none;
        z-index: 999;
        display: fixed;
    }
    .buger {
        z-index: 998;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <Link to="/" className="logo">
                MY TREE ENGLISH
            </Link>

            <Burger className="buger" />
        </Nav>
    );
};

export default Navbar;
