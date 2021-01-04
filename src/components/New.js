import { dbService } from "../fbase";
import React from "react";

const New = ({ userObj }) => {
    const colName = userObj.uid.substring(0, 9);
    const createNew = async () => {
        await dbService.collection(colName).doc("Data").set({});
        await dbService.collection(colName).doc("Profile").set({
            myphone: "My Phone Number",
            message: " 학생이 출석 하였습니다.",
        });
    };
    return (
        <div>
            <button onClick={createNew}>시작하기</button>
        </div>
    );
};

export default New;
