import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Edit from "../routes/Edit";
import About from "../routes/About";
import Navigation from "./Navigation";
import "./App.css";

const AppRouter = ({
    isLoggedIn,
    userObj,
    group,
    groupData,
    colName,
    profile,
}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/">
                            <Home
                                userObj={userObj}
                                group={group}
                                groupData={groupData}
                                colName={colName}
                                profile={profile}
                            />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/profile">
                            <Profile colName={colName} profile={profile} />
                        </Route>
                        <Route exact path="/edit">
                            <Edit
                                group={group}
                                groupData={groupData}
                                colName={colName}
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
                    </>
                ) : (
                    <>
                        <Route exact path="/">
                            <Auth />
                        </Route>
                    </>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;
