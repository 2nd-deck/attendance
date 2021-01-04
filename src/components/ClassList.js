import React, { useState } from "react";
import MemList from "./MemList";
import AddClass from "../components/AddClass";
import DelClass from "../components/DelClass";

const ClassList = ({ group, groupData, colName, mode, profile }) => {
    //key값 나열
    const [groupName, setGroupName] = useState("");
    const groupList = Object.keys(groupData);
    groupList.sort();
    const create = (eachGroup) => {
        setGroupName(eachGroup);
    };
    const listGroups = groupList.map((eachGroup) => (
        <button onClick={() => create(eachGroup)}>{eachGroup}</button>
    ));

    return (
        <>
            <ul>{listGroups}</ul>
            {mode === "edit" ? (
                <div>
                    <AddClass
                        group={group}
                        groupData={groupData}
                        colName={colName}
                    />

                    {groupName}
                </div>
            ) : (
                <div>{groupName}</div>
            )}
            {mode === "edit" && groupName ? (
                <DelClass
                    groupData={groupData}
                    colName={colName}
                    groupName={groupName}
                />
            ) : (
                ""
            )}

            <div>
                {groupName}

                {groupData[groupName] ? (
                    <MemList
                        groupName={groupName}
                        colName={colName}
                        groupData={groupData}
                        mode={mode}
                        profile={profile}
                    />
                ) : (
                    ""
                )}
            </div>
        </>
    );
};
export default ClassList;
