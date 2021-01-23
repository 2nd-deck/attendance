import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Edit from "../routes/Edit";
import Records from "../routes/Records";
import About from "../routes/About";
// import Navigation from "./Navigation";
import Navbar from "../nav/Navbar";
import styled from "styled-components";
// import "./App.css";

const AppRouter = ({
    isLoggedIn,
    userObj,
    group,
    groupData,
    colName,
    profile,
    dateInfo,
}) => {
    return (
        <Router>
            {/* {isLoggedIn && <Navigation />} */}
            {isLoggedIn && <Navbar />}
            <Switch>
                {isLoggedIn ? (
                    <Container>
                        <Route exact path="/">
                            <Home
                                userObj={userObj}
                                group={group}
                                groupData={groupData}
                                colName={colName}
                                profile={profile}
                                dateInfo={dateInfo}
                            />
                        </Route>
                        <Route exact path="/about">
                            <About
                                group={group}
                                groupData={groupData}
                                colName={colName}
                            />
                        </Route>
                        <Route exact path="/profile">
                            <Profile colName={colName} profile={profile} />
                        </Route>
                        <Route exact path="/edit">
                            <Edit
                                group={group}
                                groupData={groupData}
                                colName={colName}
                                dateInfo={dateInfo}
                            />
                        </Route>
                        <Route exact path="/records">
                            <Records
                                group={group}
                                groupData={groupData}
                                colName={colName}
                                dateInfo={dateInfo}
                            />
                        </Route>
                        {/* <Route exact path="/editClass">
                            <EditClass
                                group={group}
                                groupData={groupData}
                                colName={colName}
                            />
                        </Route> */}
                        {/* <Route exact path="/editMem">
                            <EditMem
                                group={group}
                                groupData={groupData}
                                colName={colName}
                            />
                        </Route> */}
                    </Container>
                ) : (
                    <Container>
                        <Route exact path="/">
                            <Auth />
                        </Route>
                    </Container>
                )}
            </Switch>
        </Router>
    );
};
const Container = styled.div`
    padding: 30px;
    min-width: 350px;
`;

export default AppRouter;
