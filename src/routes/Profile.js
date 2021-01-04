import { authService, dbService } from "../fbase";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// import "./Profile.css";

const Profile = ({ colName, profile }) => {
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };
    const [myPhoneInfo, setMyPhoneInfo] = useState("");
    const [messageInfo, setMessageInfo] = useState("");

    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === "myphone") {
            setMyPhoneInfo(value);
        } else if (name === "message") {
            setMessageInfo(value);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        await dbService.doc(`${colName}/Profile`).set({
            myphone: myPhoneInfo,
            message: messageInfo,
        });
    };

    return (
        <>
            <div>
                My Phone Number: {profile.myphone}
                Message: {profile.message}
            </div>
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        name="myphone"
                        placeholder={profile.myphone}
                        onChange={onChange}
                    />
                    <input
                        name="message"
                        placeholder={profile.message}
                        onChange={onChange}
                    />

                    <input type="submit" value="Change" />
                </form>
            </div>
            <div>
                <button onClick={onLogOutClick}>Log Out</button>
            </div>
            {/* <div>
                <Link to="/editClass">
                    <span>Edit Class</span>
                </Link>
              
            </div> */}
        </>
    );
};
export default Profile;
