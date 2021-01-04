import React from "react";
import AddMember from "./AddMember";
import DelMember from "./DelMember";
import Send from "./Send";

const MemList = ({ colName, groupData, groupName, mode, profile }) => {
    // let memeberList;
    const send = () => {
        console.log("send clicked");
        Send();
    };
    const memberList = groupData[groupName].map((each) => (
        <div>
            <ul>
                {mode === "edit" ? (
                    <div>
                        {each.name}({each.korean}
                        {each.phone})
                        <DelMember
                            groupData={groupData}
                            colName={colName}
                            groupName={groupName}
                            eachName={each.name}
                        />
                    </div>
                ) : (
                    <button onClick={send}>{each.name}</button>
                )}
            </ul>
        </div>
    ));

    return (
        <div>
            {mode === "edit" ? (
                <div>
                    <div>Edit Member</div>
                    <ul>{memberList}</ul>
                    <AddMember
                        colName={colName}
                        groupData={groupData}
                        groupName={groupName}
                    />
                </div>
            ) : (
                <div>
                    <ul>{memberList}</ul>
                </div>
            )}
        </div>
    );
};
export default MemList;
