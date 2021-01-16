import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    a {
        padding: 18px 10px;
        text-decoration: none;
        color: #0008fc;
        text-transform: uppercase;
        font-size: 12px;
        text-align: center;
        font-weight: 600;
    }
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #eefcff;
        position: fixed;
        transform: ${({ open }) =>
            open ? "translateX(0)" : "translateX(100%)"};
        top: 0;
        right: 0;
        height: 100vh;
        width: 150px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        a {
            color: #13a326;
            text-transform: uppercase;
            font-size: 12px;
            text-align: center;
            font-weight: 600;
        }
    }
`;

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/edit">Edit</Link>
            <Link to="/records">Records</Link>
            <Link to="/about">About</Link>
            {/* <li>Sign Up</li> */}
        </Ul>
    );
};

export default RightNav;
