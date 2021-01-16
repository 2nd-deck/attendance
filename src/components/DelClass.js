import React from "react";
import { dbService, firebaseInstance } from "../fbase";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const DelClass = ({ colName, groupName, groupData }) => {
    const history = useHistory();
    const deleteClass = async (event) => {
        event.preventDefault();

        //네임을 비교하여 같으면 삭제
        await dbService.doc(`${colName}/Data`).update({
            [groupName]: firebaseInstance.firestore.FieldValue.delete(),
        });

        history.push("/edit");
    };
    return (
        <Container>
            <h3>Delete Class</h3>
            <button onClick={deleteClass}>선택 삭제({groupName})</button>{" "}
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;
    h3 {
        color: #666666;
        margin-top: 2rem;
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
        background-color: #1c1939;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease-in;
        &:hover {
            transform: translateY(-3px);
        }
    }
`;

export default DelClass;
