import React, { useState } from "react";
// import { dbService } from "../fbase";
import styled, { css } from "styled-components";

const Records = ({ group, groupData, colName, dateInfo }) => {
    const [nameList, setNameList] = useState([]);
    const [memList, setMemList] = useState({});
    const [selectedMem, setSelectedMem] = useState({});
    const yearMonthList = Object.keys(dateInfo);
    yearMonthList.sort();
    const selectYearMonth = yearMonthList.map((yearMonth) => (
        <option value={yearMonth}>
            {yearMonth.substring(0, 4)}년 {yearMonth.substring(4)}월
        </option>
    ));
    // console.log(yearMonthList);
    const showMem = (e) => {
        // setSelYearMonth(e.target.value);

        setMemList(dateInfo[e.target.value]);
        const temp = dateInfo[e.target.value];
        setNameList(Object.keys(temp));
    };

    const selectMem = (each) => {
        if (selectedMem === each) {
            setSelectedMem("");
        } else {
            setSelectedMem(each);
        }
    };

    const showMembers = nameList.map((each) => (
        <Container>
            <MemButton
                name={each}
                selectedName={selectedMem}
                onClick={() => selectMem(each)}
            >
                {each}({memList[each].length}일)
            </MemButton>
            {selectedMem === each ? (
                <div>
                    {memList[each].map((each1) => (
                        <ul>{each1}</ul>
                    ))}
                </div>
            ) : (
                <div></div>
            )}
            {/* {console.log(memList[each])} */}
        </Container>
    ));
    return (
        <Container>
            <select onChange={showMem}>
                {nameList.length === 0 ? <option>선택</option> : <p></p>}

                {selectYearMonth}
            </select>

            {showMembers}
        </Container>
    );
};
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    h3 {
        color: #666666;
        margin-top: 2rem;
        margin-bottom: 1rem;
        text-align: center;
    }
    ul {
        padding: 10px;
        font-size: 15px;
        height: 40px;
        border: none;
        margin-bottom: 0.2rem;
        border-radius: 8px;
        vertical-align: center;
        background-color: rgb(177, 180, 182);
        color: #fff;
        font-weight: 600;
    }
    select {
        font-size: 18px;
        padding: 6px;
        font-weight: 600;
        border-radius: 8px;
        margin-bottom: 1rem;
        border: none;
        background-color: #eefcff;
    }
`;
const MemButton = styled.button`
    padding: 10px;
    /* margin-top: 2rem; */
    height: 40px;
    border: none;
    margin-right: 0.2rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    font-size: 18px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    ${(props) =>
        props.name === props.selectedName
            ? css`
                  background-color: #ffa689;
              `
            : css`
                  background-color: #70edb9;
              `};
`;
export default Records;
