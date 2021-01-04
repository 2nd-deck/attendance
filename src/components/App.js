import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import { authService, dbService } from "../fbase";

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
    }, []);
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
        <>
            {init ? (
                <AppRouter
                    isLoggedIn={isLoggedIn}
                    userObj={userObj}
                    groupData={groupData[0]}
                    profile={groupData[1]}
                    colName={colName}
                    group={group}
                />
            ) : (
                "Initializing..."
            )}
            <div className="footer">
                <footer>&copy; {new Date().getFullYear()} 2nd-deck</footer>
            </div>
        </>
    );
};

export default App;
