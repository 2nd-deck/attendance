import React from "react";
import { dbService } from "../fbase";

const SaveDate = async ({ each, colName, dateInfo }) => {
    let dateNow = new Date();
    const today = dateNow.toLocaleDateString().split(".");
    const year = today[0];
    let month = today[1].substring(1);
    const date = today[2].substring(1);
    if (month.length === 1) {
        month = "0" + month;
    } else {
        month = today[1];
    }

    const yearMonth = year + month;
    let newDateInfo = dateInfo;
    // let setSaveInfo = [];
    // console.log(newDateInfo[yearMonth][each.name]);
    if (newDateInfo[yearMonth]) {
        if (newDateInfo[yearMonth][each.name]) {
            newDateInfo[yearMonth][each.name].push(date);
        } else {
            newDateInfo[yearMonth][each.name] = [date];
        }
    } else {
        newDateInfo[yearMonth] = { [each.name]: [date] };
    }

    // const updatedData = {
    // [each.name]: setSaveInfo,
    // };
    // console.log(updatedData);
    // coleName.date;

    await dbService.collection(colName).doc("Date").set(newDateInfo);

    return <div></div>;
};

export default SaveDate;
