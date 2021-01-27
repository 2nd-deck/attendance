import React from "react";
import SaveDate from "./SaveDate";

const Send = ({ profile, each, colName, dateInfo }) => {
    let timeNow = new Date();
    let timeSave = timeNow.toLocaleTimeString();
    let timeArray = timeSave.split(":");
    let newTime = timeArray[0] + "시" + timeArray[1] + "분";
    SaveDate({ each, colName, dateInfo, newTime });
    const finalMessage = `Mytree English\n${each.name}(${each.group}) 출석하였습니다.\n\n출석 시간(${newTime})`;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        userId: colName,
        myphone: profile.myphone,
        phoneNum: each.phone,
        message: finalMessage,
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch(
        "https://us-central1-attendance-6c507.cloudfunctions.net/send",
        // "http://localhost:5001/attendance-6c507/us-central1/send",
        requestOptions
    )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    return <div></div>;
};

export default Send;
