import React, { useState } from "react";
import "./Home.css";
import ClassList from "../components/ClassList";
import New from "../components/New";

const Home = ({ userObj, group, groupData, colName, profile }) => {
    const mode = "send";
    return (
        <>
            {group ? (
                <div>
                    <ClassList
                        group={group}
                        groupData={groupData}
                        coleName={colName}
                        mode={mode}
                        profile={profile}
                    />
                </div>
            ) : (
                <div>
                    <New userObj={userObj} />
                </div>
            )}
        </>
    );
};

export default Home;
