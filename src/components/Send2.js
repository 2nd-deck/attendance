import React from "react";

const Send2 = () => {
    const crypto = require('crypto');
    const request = require('request');
    const phoneNumber = '01066860366';
    const NCP_accessKey = '41hzvfNYAedKNMSCw5zj';          

       // access key id (from portal or sub account)
    const NCP_secretKey = 'avoGMaAXYsuaY0ZpA3aheAaR4KacVara3mj9ROlD';           

      // secret key (from portal or sub account)
    const NCP_serviceID = 'ncp:sms:kr:262735726740:attendance';

      // sens serviceID
    const myPhoneNumber = '01066860366';

    const space = " ";          // one space
    const newLine = "\n";           // new line
    const method = "POST";          // method

    const url = `https://sens.apigw.ntruss.com/sms/v2/services/${NCP_serviceID}/messages`;  
    console.log({url});
      // url (include query string)
    const url2 = `/sms/v2/services/${NCP_serviceID}/messages`;

    const timestamp = Date.now().toString();         // current timestamp (epoch)
    let message = [];
    let hmac=crypto.createHmac('sha256',NCP_secretKey);

    message.push(method);
    message.push(space);
    message.push(url2);
    message.push(newLine);
    message.push(timestamp);
    message.push(newLine);
    message.push(NCP_accessKey);
    const signature = hmac.update(message.join('')).digest('base64');


    const number = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    request({
        method: method,
        json: true,
        uri: url,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'x-ncp-iam-access-key' : NCP_accessKey,
            'x-ncp-apigw-timestamp': timestamp,
            'x-ncp-apigw-signature-v2': signature.toString()
        },
        body: {
            "type":"SMS",
            "contentType":"COMM",
            "countryCode":"82",
            "from": myPhoneNumber,
            "content":"test",
            "messages":[
                {
                    "to": phoneNumber ,
                }
            ]
        }
    },function (err, res, html) {
        if(err) console.log(err);
        console.log(html);
    });
    return(
        <div>
            send
        </div>
    )
}

export default Send2;