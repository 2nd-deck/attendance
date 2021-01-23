import React, { useState } from "react";
import AddMember from "./AddMember";
import DelMember from "./DelMember";
import Send from "./Send";
import styled, { css } from "styled-components";
import { ModifyInput } from "../components/ModifyInput";
import { dbService } from "../fbase";

import SaveDate from "./SaveDate";

const MemList = ({
    colName,
    groupData,
    groupName,
    mode,
    profile,
    dateInfo,
}) => {
    const [memName, setMemName] = useState("");
    const [newMember, setNewMember] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newGroup, setNewGroup] = useState("");

    const groupList = Object.keys(groupData);
    groupList.sort();
    const create = (props) => {
        setMemName(props.name);
        setNewMember(props.name);
        setNewPhone(props.phone);
        setNewGroup(props.group);
    };
    const selectGroup = groupList.map((group) => (
        <option value={group}>{group}</option>
    ));

    const changeGroup = (e) => {
        setNewGroup(e.target.value);
    };

    const onSubmit = async (event, props) => {
        event.preventDefault();

        groupData[newGroup].push({
            name: newMember,
            phone: newPhone,
            korean: "",
            group: newGroup,
        });
        //네임을 비교하여 같으면 삭제
        const idx = groupData[groupName].findIndex(function (item) {
            return item.name === props;
        });
        if (idx > -1) groupData[groupName].splice(idx, 1);
        console.log(groupData[groupName]);
        await dbService.doc(`${colName}/Data`).set(groupData);
    };
    // let memeberList;
    const memberList = groupData[groupName].map((each) => (
        <div>
            <ul>
                {mode === "edit" ? (
                    <div>
                        <DelMem>
                            <Mem
                                eachName={each.name}
                                memName={memName}
                                onClick={() => create(each)}
                            >
                                {each.name}({each.korean}
                                {each.phone})
                            </Mem>
                            <DelMember
                                groupData={groupData}
                                colName={colName}
                                groupName={groupName}
                                eachName={each.name}
                            />
                        </DelMem>

                        <div>
                            {each.name === memName ? (
                                <Form onSubmit={(e) => onSubmit(e, each.name)}>
                                    <div>
                                        <ModifyInput
                                            name="member"
                                            placeholder={each.name}
                                            onChange={(e) =>
                                                setNewMember(e.target.value)
                                            }
                                        />
                                        <select
                                            defaultValue={each.group}
                                            onChange={changeGroup}
                                        >
                                            {selectGroup}
                                        </select>
                                    </div>
                                    <div>
                                        <ModifyInput
                                            name="phone"
                                            type="phone"
                                            placeholder={each.phone}
                                            onChange={(e) =>
                                                setNewPhone(e.target.value)
                                            }
                                        />
                                        <button>Modify</button>
                                    </div>
                                </Form>
                            ) : null}
                        </div>
                    </div>
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
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    h1 {
        color: #666666;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    select {
        /* font-size: 18px; */
        padding: 6px;
        font-weight: 600;
        border-radius: 8px;
        margin-bottom: 1rem;
        height: 40px;
        padding: 0 1rem;
        border: none;
        background-color: #f5f5f5;
        transition: all 0.2s ease-in;
        &:hover {
            transform: translateY(-3px);
        }
    }
    button {
        width: 75%;
        max-width: 110px;
        min-width: 100px;
        height: 40px;
        border: none;
        margin: 1rem, 0;
        margin-bottom: 1rem;

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
`;

const Mem = styled.div`
    display: flex;
    margin-bottom: 0.5rem;

    width: 70%;
    text-align: center;
    padding-top: 8px;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem, 0;
    padding-left: 10px;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: rgb(177, 180, 182);
    color: #fff;
    ${(props) =>
        props.eachName === props.memName
            ? css`
                  background-color: #ffa689;
              `
            : css`
                  background-color: rgb(177, 180, 182);
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

export default MemList;
