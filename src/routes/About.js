import React from "react";
import "./About.css";
import styled from "styled-components";

function About(props) {
    return (
        <Container>
            <span>2nd Deck</span>
        </Container>
    );
}
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    justify-content: space-evenly;
`;
export default About;
