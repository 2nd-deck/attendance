import React from "react";
import ClassList from "../components/ClassList";
import styled from "styled-components";
const Edit = ({ group, groupData, colName, dateInfo }) => {
    const mode = "edit";
    return (
        <>
            <Container>
                <ClassList
                    group={group}
                    groupData={groupData}
                    colName={colName}
                    mode={mode}
                    dateInfo={dateInfo}
                />
            </Container>
        </>
    );
};
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    justify-content: space-evenly;
`;
export default Edit;
