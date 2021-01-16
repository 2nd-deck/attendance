import React from "react";
// import "./Home.css";
import ClassList from "../components/ClassList";
import New from "../components/New";
import styled from "styled-components";

const Home = ({ userObj, group, groupData, colName, profile, dateInfo }) => {
    const mode = "send";
    return (
        <Container>
            {group ? (
                <div>
                    <ClassList
                        group={group}
                        groupData={groupData}
                        colName={colName}
                        mode={mode}
                        profile={profile}
                        dateInfo={dateInfo}
                    />
                </div>
            ) : (
                <div>
                    <New userObj={userObj} />
                </div>
            )}
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    justify-content: space-evenly;
`;

export default Home;
