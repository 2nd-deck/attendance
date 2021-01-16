import React from "react";
import { dbService } from "../fbase";
import styled from "styled-components";

const DelMember = ({ colName, groupName, groupData, eachName }) => {
    const deleteMem = async (event) => {
        event.preventDefault();

        //네임을 비교하여 같으면 삭제
        const idx = groupData[groupName].findIndex(function (item) {
            return item.name === eachName;
        });
        if (idx > -1) groupData[groupName].splice(idx, 1);

        await dbService.doc(`${colName}/Data`).set(groupData);
    };
    return (
        <div>
            <DelButton onClick={deleteMem}>삭제</DelButton>{" "}
        </div>
    );
};

const DelButton = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 8px;
    padding-left: 15px;
    padding-right: 15px;

    height: 40px;
    border: none;
    margin: 1rem, 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #ff0000;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
        transform: translateY(-3px);
    }
`;
export default DelMember;
