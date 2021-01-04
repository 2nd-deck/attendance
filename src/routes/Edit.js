import React from "react";
import ClassList from "../components/ClassList";
const Edit = ({ group, groupData, colName }) => {
    const mode = "edit";
    return (
        <>
            <div>
                <ClassList
                    group={group}
                    groupData={groupData}
                    colName={colName}
                    mode={mode}
                />
            </div>
        </>
    );
};

export default Edit;
