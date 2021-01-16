import React from "react";
import AddMember from "./AddMember";
import DelMember from "./DelMember";
import Send from "./Send";
import styled from "styled-components";
import SaveDate from "./SaveDate";

const MemList = ({
    colName,
    groupData,
    groupName,
    mode,
    profile,
    dateInfo,
}) => {
    // let memeberList;
    const memberList = groupData[groupName].map((each) => (
        <div>
            <ul>
                {mode === "edit" ? (
                    <DelMem>
                        <div className="Name">
                            {each.name}({each.korean}
                            {each.phone})
                        </div>

                        <DelMember
                            groupData={groupData}
                            colName={colName}
                            groupName={groupName}
                            eachName={each.name}
                        />
                    </DelMem>
                ) : (
                    <Membutton
                        onClick={() => {
                            const result = window.confirm(
                                `${each.name} 출석이 맞습니까?`
                            );
                            if (result) {
                                SaveDate({ each, colName, dateInfo });
                                Send({
                                    profile,
                                    each,
                                    colName,
                                    dateInfo,
                                });
                            }
                        }}
                        disabled={attend({ each, dateInfo })}
                    >
                        {each.name}
                    </Membutton>
                )}
            </ul>
        </div>
    ));

    return (
        <Container>
            {mode === "edit" ? (
                <div>
                    <h1>Member List</h1>
                    <ul>{memberList}</ul>
                    <AddMember
                        colName={colName}
                        groupData={groupData}
                        groupName={groupName}
                    />
                </div>
            ) : (
                <div>
                    <h1>Member List</h1>
                    <ul>{memberList}</ul>
                </div>
            )}
        </Container>
    );
};

const attend = ({ each, dateInfo }) => {
    let dateNow = new Date();
    const today = dateNow.toLocaleDateString().split(".");
    const year = today[0];
    let month = today[1].substring(1);
    const date = today[2].substring(1);
    if (month.length === 1) {
        month = "0" + month;
    } else {
        month = today[1];
    }
    const yearMonth = year + month;

    // let setSaveInfo = [];
    if (dateInfo[yearMonth]) {
        if (dateInfo[yearMonth][each.name]) {
            if (
                dateInfo[yearMonth][each.name].every(function (value) {
                    return value !== date;
                })
            ) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
};

const Container = styled.div`
    h1 {
        color: #666666;
        margin-bottom: 1rem;
        text-align: center;
    }
`;
const Membutton = styled.button`
    width: 80%;
    max-width: 350px;
    min-width: 250px;
    height: 60px;
    border: none;
    margin: 1rem, 0;
    margin-bottom: 2rem;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-size: 26px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
        transform: translateY(-3px);
    }
    &:disabled {
        background-color: #fe2f75;
    }
`;
const DelMem = styled.div`
    display: flex;
    margin-bottom: 1rem;
    .Name {
        width: 80%;
        text-align: center;
        padding-top: 8px;
        max-width: 350px;
        min-width: 250px;
        height: 40px;
        border: none;
        margin: 1rem, 0;

        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        background-color: #9d9d9d;
        color: #fff;
        font-weight: 600;
    }
`;

export default MemList;
