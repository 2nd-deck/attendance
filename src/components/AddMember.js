import React, { useState } from "react";
import { dbService } from "../fbase";

const AddMember = ({ colName, groupData, groupName }) => {
    const [newMember, setNewMember] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newKorean, setNewKorean] = useState("");
    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === "member") {
            setNewMember(value);
        } else if (name === "phone") {
            setNewPhone(value);
        } else if (name === "koreanName") {
            setNewKorean(value);
        }
    };

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
            <form onSubmit={onSubmit}>
                <input
                    name="member"
                    placeholder="Member Name"
                    onChange={onChange}
                />
                <input
                    name="koreanName"
                    placeholder="실명"
                    onChange={onChange}
                />
                <input
                    name="phone"
                    placeholder="Phone Number"
                    onChange={onChange}
                />

                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddMember;
