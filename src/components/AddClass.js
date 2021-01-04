import React, { useState } from "react";
import { dbService } from "../fbase";

const AddClass = ({ colName, groupData }) => {
    const [classGroup, setClassGroup] = useState("");
    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        setClassGroup(value);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService
            .collection(colName)
            .doc("Data")
            .set(
                {
                    [classGroup]: [],
                },
                { merge: true }
            );
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="classGroup"
                    placeholder="Class Name"
                    onChange={onChange}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddClass;
