import React from "react";
import { dbService, firebaseInstance } from "../fbase";
import { useHistory } from "react-router-dom";

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
        <div>
            <button onClick={deleteClass}>삭제</button>{" "}
        </div>
    );
};

export default DelClass;
