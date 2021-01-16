import { authService, dbService } from "../fbase";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../components/Input";
import styled from "styled-components";

// import "./Profile.css";

const Profile = ({ colName, profile }) => {
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };
    const [myPhoneInfo, setMyPhoneInfo] = useState("");

    // const onChange = (event) => {
    //     const {
    //         target: { name, value },
    //     } = event;
    //     if (name === "myphone") {
    //         setMyPhoneInfo(value);
    //     }
    // };

    const onSubmit = async (event) => {
        event.preventDefault();

        await dbService.doc(`${colName}/Profile`).set({
            myphone: myPhoneInfo,
        });
    };

    return (
        <>
            <div>
                <Form onSubmit={onSubmit}>
                    <h3>My Phone Number: {profile.myphone}</h3>
                    <Input
                        name="myphone"
                        placeholder="My phone Number"
                        onChange={(e) => setMyPhoneInfo(e.target.value)}
                    />

                    <button>Change</button>
                </Form>
            </div>
            <Form>
                <h3>LogOut</h3>
                <button onClick={onLogOutClick}>Log Out</button>
            </Form>
            {/* <div>
                <Link to="/editClass">
                    <span>Edit Class</span>
                </Link>
              
            </div> */}
        </>
    );
};

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    h3 {
        color: #666666;
        margin-top: 2rem;
        margin-bottom: 1rem;
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

export default Profile;
