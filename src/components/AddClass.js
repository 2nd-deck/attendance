import React, { useState } from "react";
import { dbService } from "../fbase";
import styled from "styled-components";
import Input from "./Input";

const AddClass = ({ colName, groupData, groupList }) => {
    const [classGroup, setClassGroup] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        if (
            groupList.every(function (value) {
                return value !== classGroup;
            })
        ) {
            await dbService
                .collection(colName)
                .doc("Data")
                .set(
                    {
                        [classGroup]: [],
                    },
                    { merge: true }
                );
        } else {
            window.alert("동일한 그룹명이 존재합니다.");
            return;
        }
    };
    return (
        <div>
            <Form onSubmit={onSubmit}>
                <h3>Add Class</h3>
                <Input
                    name="classGroup"
                    placeholder="Class Name"
                    onChange={(e) => setClassGroup(e.target.value)}
                />
                <button>ADD</button>
            </Form>
        </div>
    );
};

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    h3 {
        color: #666666;
        margin-top: 0rem;
        margin-bottom: 1rem;
    }
    button {
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

export default AddClass;
