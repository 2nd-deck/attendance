import React, { useState } from "react";
import MemList from "./MemList";
import AddClass from "../components/AddClass";
import DelClass from "../components/DelClass";
import styled, { css } from "styled-components";

const ClassList = ({ group, groupData, colName, mode, profile, dateInfo }) => {
    //key값 나열
    const [groupName, setGroupName] = useState("");
    const groupList = Object.keys(groupData);
    groupList.sort();
    const create = (eachGroup) => {
        setGroupName(eachGroup);
    };
    const listGroups = groupList.map((eachGroup) => (
        <ClassButton
            eachGroup={eachGroup}
            groupName={groupName}
            onClick={() => create(eachGroup)}
        >
            {eachGroup}
        </ClassButton>
    ));

    return (
        <Container>
            <Container1>
                <h1>Class List</h1>
                <Classes>
                    <ul>{listGroups}</ul>
                </Classes>
                {/* {groupData[groupName] ? (
                    <div>
                        {groupName}
                        <MemList
                            groupName={groupName}
                            colName={colName}
                            groupData={groupData}
                            mode={mode}
                            profile={profile}
                        />
                    </div>
                ) : (
                    ""
                )} */}

                {mode === "edit" ? (
                    <div>
                        <AddClass
                            groupList={groupList}
                            group={group}
                            groupData={groupData}
                            colName={colName}
                        />

                        {groupName ? (
                            <DelClass
                                groupData={groupData}
                                colName={colName}
                                groupName={groupName}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                ) : (
                    <div></div>
                )}
            </Container1>

            {groupData[groupName] ? (
                <Container2>
                    <MemList
                        groupName={groupName}
                        colName={colName}
                        groupData={groupData}
                        mode={mode}
                        profile={profile}
                        dateInfo={dateInfo}
                    />
                </Container2>
            ) : (
                ""
            )}
        </Container>
    );
};

const Container = styled.div`
    display: --webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    width: 100%;

    @media (min-width: 900px) {
        width: 900px;
        margin-left: auto;
        margin-right: auto;
    }
`;

const Container1 = styled.div`
    width: 100%;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    margin-bottom: 1rem;
    h1 {
        color: #666666;
        margin-bottom: 0.5rem;
    }
    @media (min-width: 900px) {
        width: 50%;
        margin-bottom: 0rem;
    }
`;
const Container2 = styled.div`
    width: 100%;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    /* margin-top: 2rem; */
    justify-content: default(flex-start);
    align-items: center;
    @media (min-width: 900px) {
        width: 50%;
    }
`;

const Classes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-flow: wrap;

    margin-bottom: 3rem;
`;
const ClassButton = styled.button`
    /* display: flex;
    flex-direction: row;
    align-items: center; */

    width: 10%;
    max-width: 100px;
    min-width: 80px;
    height: 50px;
    border: none;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    /* background-color: #7165e3; */
    background-color: #7165e3;
    ${(props) =>
        props.eachGroup === props.groupName
            ? css`
                  background-color: #ffa689;
              `
            : css`
                  background-color: #7165e3;
              `};
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
        transform: translateY(-3px);
    }
    &:focus {
        background: #ffa689;
    }
`;

export default ClassList;
