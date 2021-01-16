import React, { useState } from "react";
import { dbService } from "../fbase";
import { Input } from "./Input";
import styled from "styled-components";

const AddMember = ({ colName, groupData, groupName }) => {
    const [newMember, setNewMember] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newKorean, setNewKorean] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        groupData[groupName].push({
            name: newMember,
            phone: newPhone,
            korean: newKorean,
            group: groupName,
        });
        await dbService.doc(`${colName}/Data`).set(groupData);
    };

    // const addData = (groupData) => {
    //     groupData.push({
    //         name: newMember,
    //         phone: newPhone,
    //         group: newGroup,
    //     });
    // };
    return (
        <div>
            <Form onSubmit={onSubmit}>
                <h3>Add Member</h3>
                <Input
                    name="member"
                    placeholder="Member Name"
                    onChange={(e) => setNewMember(e.target.value)}
                />
                <Input
                    name="koreanName"
                    placeholder="실명"
                    onChange={(e) => setNewKorean(e.target.value)}
                />
                <Input
                    name="phone"
                    type="phone"
                    placeholder="Phone Number"
                    onChange={(e) => setNewPhone(e.target.value)}
                />
                <button>Add</button>
                {/* <input type="submit" value="Add" /> */}
            </Form>
        </div>
    );
};
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        color: #666666;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    button {
        width: 75%;
        width: 80%;
        max-width: 350px;
        min-width: 250px;
        height: 40px;
        border: none;
        margin: 1rem, 0;
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
export default AddMember;
