import React from "react";

const Send = () => {
    console.log("send?");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        myphone: "01066860366",
        phoneNum: "01066860366",
        message: " 학생 출석하였습니다.",
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
    return <div>굿</div>;
};

export default Send;
