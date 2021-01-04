import React from "react";
import { dbService } from "../fbase";

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
            <button onClick={deleteMem}>삭제</button>{" "}
        </div>
    );
};

export default DelMember;
