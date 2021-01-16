import { dbService } from "../fbase";
import React from "react";
import styled from "styled-components";

const New = ({ userObj }) => {
    const colName = userObj.uid.substring(0, 9);
    const createNew = async () => {
        await dbService.collection(colName).doc("Data").set({});
        await dbService.collection(colName).doc("Profile").set({
            myphone: "My Phone Number",
        });
        await dbService.collection(colName).doc("Date").set({});
    };
    return (
        <Container>
            <h1>새로 시작하기</h1>
            <button onClick={createNew}>START</button>
        </Container>
    );
};
const Container = styled.div`
    h1 {
        color: #666666;
        margin-bottom: 1rem;
        text-align: center;
    }
    button {
        width: 80%;
        max-width: 350px;
        min-width: 250px;
        height: 40px;
        border: none;
        margin: 1rem, 0;
        margin-bottom: 0.5rem;
        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        background-color: #70edb9;
        color: #fff;
        font-size: 24px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease-in;
        &:hover {
            transform: translateY(-3px);
        }
    }
`;
export default New;
