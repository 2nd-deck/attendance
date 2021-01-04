import React from "react";

const Send1 = () => {
    const express = require('express');

    const appsend = express(); 
    const crypto = require('crypto');  //암호화를 위해 사용해줍니다. sms api 사용할때 조건에도 이거쓰라고있습니다.
    const request = require('request'); 
     
    const PORT = 3000 ; 
    appsend.listen(PORT, ()=>{console.log('http://localhost:3000/m gonna be your localhost')}  );

    appsend.get('/m', (req, res)=>{    // we use localhost3000/m 
        const phone = '01066860366'; // 전화 받는사람
        const accessKey = '41hzvfNYAedKNMSCw5zj';		
        const secretKey = 'avoGMaAXYsuaY0ZpA3aheAaR4KacVara3mj9ROlD';       
        const serviceID = 'ncp:sms:kr:262735726740:attendance'     
        const myphone = '01066860366'; 
        const space = " ";          
        const newLine = "\n";        
        const method = "POST";          

        const url = `https://sens.apigw.ntruss.com/sms/v2/services/${serviceID}/messages`;

        // url (include query string) 시그니처 만들때 더해줍니다. 
        const urlsub = `/sms/v2/services/${serviceID}/messages`;

        const timestamp = Date.now().toString();   
    
        let hmac=crypto.createHmac('sha256',secretKey);
        let mes = []; 
        mes.push(method);
        mes.push(space);
        mes.push(urlsub);
        mes.push(newLine);
        mes.push(timestamp);
        mes.push(newLine);
        mes.push(accessKey);
        const signature = hmac.update(mes.join('')).digest('base64');
     //update는 mes 값을 hmac으로 설정한 크립토(암호화)함수에 대입해주는것입니다. 
     //join 으로 해주면 배열의 값을 구분해주는데 파라미터값이 존재한다면 배열 사이사이에
     // 파라미터값을 넣어줍니다. 
 // 저희는 경로 설정을 완료했으니 request로 요청합시다.
  
        request({
            method: method,    //post 로 설정을 해줬습니다. 위에서
            json: true,   	//json 을 true 로 해줘야 header 값이 제이슨값
            uri: url,  //경로 파라미터를 여기다 넣어줍니다. 
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'x-ncp-iam-access-key' : accessKey,        
                'x-ncp-apigw-timestamp': timestamp,
                'x-ncp-apigw-signature-v2': signature.toString()
            },
            body: {
                "type":"SMS",
                "contentType":"COMM",
                "countryCode":"82",
                "from": `${myphone}`,
                "content":`code service  입니다.`, 
                "messages":[
                    {
                        "to":`${phone}`,         
                    }
                ]
            }
        },function (err, res, html) {
            if(err) console.log(err);
            console.log(html);
        });
    });

   

}

export default Send1;