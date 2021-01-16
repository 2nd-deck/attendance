import { authService } from "../fbase";
import React, { useState } from "react";
import "./Auth.css";
import Input from "../components/Input";
import styled from "styled-components";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                data = await authService.createUserWithEmailAndPassword(
                    email,
                    password
                );
            } else {
                data = await authService.signInWithEmailAndPassword(
                    email,
                    password
                );
            }
        } catch (error) {
            setError(error.message);
        }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);
    return (
        <Container>
            <Form onSubmit={onSubmit} className="container1">
                <h1>Welcome</h1>
                <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="submit"
                    className="authInput authSubmit"
                    value={newAccount ? "Create Account" : "Log In"}
                />
                {error && <span className="authError">{error}</span>}
                <span onClick={toggleAccount} className="authSwitch">
                    {newAccount ? "Sing In" : "Create Account"}
                </span>
            </Form>
        </Container>
    );
};
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    justify-content: space-evenly;
`;
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    h1 {
        color: #666666;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    button {
        width: 80%;
        max-width: 250px;
        min-width: 250px;
        height: 40px;
        border: none;
        margin: 1rem, 0;
        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        background-color: #70edb9;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease-in;
        &:hover {
            transform: translateY(-3px);
        }
    }
`;
export default Auth;
