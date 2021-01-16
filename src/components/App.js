import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import { authService, dbService } from "../fbase";
import styled from "styled-components";
// import bgImg from "../assets/bg.png";

const App = () => {
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userObj, setUserObj] = useState(null);
    const [colName, setColName] = useState("");
    const [group, setGroup] = useState(false);
    const [groupData, setGroupData] = useState([]);

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
                setUserObj(user);
            } else {
                setIsLoggedIn(false);
            }
            setInit(true);
        });
    }, [isLoggedIn]);
    useEffect(() => {
        if (userObj !== null) {
            setColName(userObj.uid.substring(0, 9));
        }
    }, [userObj]);
    useEffect(() => {
        if (colName !== "") {
            dbService.collection(colName).onSnapshot((snapshot) => {
                const colNameArray = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                }));

                setGroupData(colNameArray);
                if (colNameArray.length !== 0) {
                    setGroup(true);
                }
            });
            // dbService
            //     .collection(colName)
            //     .doc("Profile")
            //     .onSnapshot((snapshot) => {
            //         const profileInfo = snapshot.docs.map((doc) => ({
            //             ...doc.data(),
            //             // id: doc.id,
            //         }));

            //         setProfile(profileInfo);
            //     });
        }
    }, [colName]);

    return (
        <Container>
            <Wrapper>
                {init ? (
                    <AppRouter
                        isLoggedIn={isLoggedIn}
                        userObj={userObj}
                        groupData={groupData[0]}
                        profile={groupData[2]}
                        dateInfo={groupData[1]}
                        colName={colName}
                        group={group}
                    />
                ) : (
                    "Initializing..."
                )}
                {/* <div className="footer"> */}
                {/* <footer>&copy; {new Date().getFullYear()} 2nd-deck</footer> */}
                {/* </div> */}
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    background: #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;
const Wrapper = styled.div`
    /* background-position: center; */
    /* background-size: cover; */
    /* background-repeat: no-repeat; */
    /* background-attachment: fixed; */
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export default App;
