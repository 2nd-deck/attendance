import React, { useState } from "react";
// import { dbService } from "../fbase";
import styled from "styled-components";

const Records = ({ group, groupData, colName, dateInfo }) => {
    const [nameList, setNameList] = useState([]);
    const [memList, setMemList] = useState({});
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

    const showMembers = nameList.map((each) => (
        <div>
            <h3>{each}</h3>
            {memList[each].map((each1) => (
                <span>{each1}</span>
            ))}
            {/* {console.log(memList[each])} */}
        </div>
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
    span {
        padding: 10px;

        height: 40px;
        border: none;
        margin-right: 0.2rem;
        margin-bottom: 0.2rem;
        border-radius: 8px;
        background-color: #70edb9;
        color: #fff;
        font-weight: 600;
    }
    select {
        font-size: 18px;
        padding: 6px;
        font-weight: 600;
        border-radius: 8px;
        border: none;
        background-color: #eefcff;
    }
`;
export default Records;
