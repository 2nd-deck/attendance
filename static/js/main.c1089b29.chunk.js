(this.webpackJsonpattendance=this.webpackJsonpattendance||[]).push([[0],{43:function(n,e,t){},47:function(n,e,t){},52:function(n,e,t){},53:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(2),o=t.n(a),c=t(33),i=t.n(c),u=(t(43),t(3)),s=t(34),d=t(8),l=t(18),p=t(9),b=t(7),f=t.n(b),h=t(12),x=t(25);t(45),t(54);x.a.initializeApp({apiKey:"AIzaSyALXfyozWxHJFl8mhD9B5WJGLCD258ebn0",authDomain:"attendance-6c507.firebaseapp.com",databaseURL:"https://attendance-6c507-default-rtdb.firebaseio.com/",projectId:"attendance-6c507",storageBucket:"attendance-6c507.appspot.com",messagingSenderId:"91593436424",appId:"1:91593436424:web:3cb922e34d308674c890bd"});var j=x.a.auth(),m=x.a.firestore(),g=x.a,O=(t(47),t(4));function v(){var n=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return v=function(){return n},n}function w(){var n=Object(u.a)(["\n    height: 10px;\n    width: 10px;\n    background: #9d9d9d;\n    border-radius: 10px;\n    margin-left: 1rem;\n\n    ",":focus + & {\n        background: #ffa689;\n    }\n    ",":invalid + & {\n        background: #fe2f75;\n    }\n    ",":valid + & {\n        background: #70edb9;\n    }\n"]);return w=function(){return n},n}function y(){var n=Object(u.a)(["\n    width: 80%;\n    max-width: 350px;\n    min-width: 250px;\n    height: 40px;\n    border: none;\n    margin-bottom: 1rem;\n    background-color: #f5f5f5;\n    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);\n    border-radius: 8px;\n    padding: 0 1rem;\n    transition: all 0.2s ease-in;\n    &:hover {\n        transform: translateY(-3px);\n    }\n"]);return y=function(){return n},n}var k=function(n){var e=n.type,t=n.placeholder,a=n.onChange;return Object(r.jsxs)(S,{children:[Object(r.jsx)(N,{type:e||"text",placeholder:t&&t,onChange:a,requrired:!0,autoComplete:"off"}),Object(r.jsx)(D,{})]})},N=O.b.input(y()),D=O.b.div(w(),N,N,N),S=O.b.div(v()),I=k;function C(){var n=Object(u.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 1rem;\n    h1 {\n        color: #666666;\n        margin-top: 2rem;\n        margin-bottom: 2rem;\n    }\n    button {\n        width: 80%;\n        max-width: 250px;\n        min-width: 250px;\n        height: 40px;\n        border: none;\n        margin: 1rem, 0;\n        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);\n        border-radius: 8px;\n        background-color: #70edb9;\n        color: #fff;\n        font-weight: 600;\n        cursor: pointer;\n        transition: all 0.2s ease-in;\n        &:hover {\n            transform: translateY(-3px);\n        }\n    }\n"]);return C=function(){return n},n}function L(){var n=Object(u.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n\n    justify-content: space-evenly;\n"]);return L=function(){return n},n}var A=O.b.div(L()),E=O.b.form(C()),z=function(){var n=Object(a.useState)(""),e=Object(d.a)(n,2),t=e[0],o=e[1],c=Object(a.useState)(""),i=Object(d.a)(c,2),u=i[0],s=i[1],l=Object(a.useState)(!0),p=Object(d.a)(l,2),b=p[0],x=p[1],m=Object(a.useState)(""),g=Object(d.a)(m,2),O=g[0],v=g[1],w=function(){var n=Object(h.a)(f.a.mark((function n(e){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),n.prev=1,!b){n.next=8;break}return n.next=5,j.createUserWithEmailAndPassword(t,u);case 5:n.sent,n.next=11;break;case 8:return n.next=10,j.signInWithEmailAndPassword(t,u);case 10:n.sent;case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),v(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(e){return n.apply(this,arguments)}}();return Object(r.jsx)(A,{children:Object(r.jsxs)(E,{onSubmit:w,className:"container1",children:[Object(r.jsx)("h1",{children:"Welcome"}),Object(r.jsx)(I,{name:"email",type:"email",placeholder:"Email",required:!0,value:t,onChange:function(n){return o(n.target.value)}}),Object(r.jsx)(I,{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:function(n){return s(n.target.value)}}),Object(r.jsx)("input",{type:"submit",className:"authInput authSubmit",value:b?"Create Account":"Log In"}),O&&Object(r.jsx)("span",{className:"authError",children:O}),Object(r.jsx)("span",{onClick:function(){return x((function(n){return!n}))},className:"authSwitch",children:b?"Sing In":"Create Account"})]})})};function Y(){var n=Object(u.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    h3 {\n        color: #666666;\n        margin-top: 1rem;\n        margin-bottom: 1rem;\n    }\n    button {\n        width: 75%;\n        width: 80%;\n        max-width: 350px;\n        min-width: 250px;\n        height: 40px;\n        border: none;\n        margin: 1rem, 0;\n        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);\n        border-radius: 8px;\n        background-color: #70edb9;\n        color: #fff;\n        font-weight: 600;\n        cursor: pointer;\n        transition: all 0.2s ease-in;\n        &:hover {\n            transform: translateY(-3px);\n        }\n    }\n"]);return Y=function(){return n},n}var M=O.b.form(Y()),P=function(n){var e=n.colName,t=n.groupData,o=n.groupName,c=Object(a.useState)(""),i=Object(d.a)(c,2),u=i[0],s=i[1],l=Object(a.useState)(""),p=Object(d.a)(l,2),b=p[0],x=p[1],j=Object(a.useState)(""),g=Object(d.a)(j,2),O=g[0],v=g[1],w=function(){var n=Object(h.a)(f.a.mark((function n(r){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),t[o].push({name:u,phone:b,korean:O,group:o}),n.next=4,m.doc("".concat(e,"/Data")).set(t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.jsx)("div",{children:Object(r.jsxs)(M,{onSubmit:w,children:[Object(r.jsx)("h3",{children:"Add Member"}),Object(r.jsx)(k,{name:"member",placeholder:"Member Name",onChange:function(n){return s(n.target.value)}}),Object(r.jsx)(k,{name:"koreanName",placeholder:"\uc2e4\uba85",onChange:function(n){return v(n.target.value)}}),Object(r.jsx)(k,{name:"phone",type:"phone",placeholder:"Phone Number",onChange:function(n){return x(n.target.value)}}),Object(r.jsx)("button",{children:"Add"})]})})};function T(){var n=Object(u.a)(["\n    width: 100%;\n    text-align: center;\n    padding-top: 8px;\n    padding-left: 15px;\n    padding-right: 15px;\n\n    height: 40px;\n    border: none;\n    margin: 1rem, 0;\n    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);\n    border-radius: 8px;\n    background-color: #ff0000;\n    color: #fff;\n    font-weight: 600;\n    cursor: pointer;\n    transition: all 0.2s ease-in;\n    &:hover {\n        transform: translateY(-3px);\n    }\n"]);return T=function(){return n},n}var F=O.b.div(T()),G=function(n){var e=n.colName,t=n.groupName,a=n.groupData,o=n.eachName,c=function(){var n=Object(h.a)(f.a.mark((function n(r){var c;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),(c=a[t].findIndex((function(n){return n.name===o})))>-1&&a[t].splice(c,1),n.next=5,m.doc("".concat(e,"/Data")).set(a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsx)(F,{onClick:c,children:"\uc0ad\uc81c"})," "]})},J=function(n){var e=n.profile,t=n.each,a=n.colName,o=(new Date).toLocaleTimeString().split(":"),c=o[0]+"\uc2dc"+o[1]+"\ubd84",i="Mytree English\n".concat(t.name,"(").concat(t.group,") \ucd9c\uc11d\ud558\uc600\uc2b5\ub2c8\ub2e4.\n\n\ucd9c\uc11d \uc2dc\uac04(").concat(c,")");console.log(a);var u=new Headers;u.append("Content-Type","application/json");var s=JSON.stringify({userId:a,myphone:e.myphone,phoneNum:t.phone,message:i});return fetch("https://us-central1-attendance-6c507.cloudfunctions.net/send",{method:"POST",headers:u,body:s,redirect:"follow"}).then((function(n){return n.text()})).then((function(n){return console.log(n)})).catch((function(n){return console.log("error",n)})),Object(r.jsx)("div",{})},W=t(19),X=function(){var n=Object(h.a)(f.a.mark((function n(e){var t,a,o,c,i,u,s,d,l,p;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.each,a=e.colName,o=e.dateInfo,c=new Date,i=c.toLocaleDateString().split("."),u=i[0],s=i[1].substring(1),d=i[2].substring(1),s=1===s.length?"0"+s:i[1],p=o,o[l=u+s]?o[l][t.Name]?p[l][t.name].push(d):p[l][t.name]=[d]:p[l]=Object(W.a)({},t.name,[d]),n.next=12,m.collection(a).doc("Date").set(p);case 12:return n.abrupt("return",Object(r.jsx)("div",{}));case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function H(){var n=Object(u.a)(["\n    display: flex;\n    margin-bottom: 1rem;\n    .Name {\n        width: 80%;\n        text-align: center;\n        padding-top: 8px;\n        max-width: 350px;\n        min-width: 250px;\n        height: 40px;\n        border: none;\n        margin: 1rem, 0;\n\n        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);\n        border-radius: 8px;\n        background-color: #9d9d9d;\n        color: #fff;\n        font-weight: 600;\n    }\n"]);return H=function(){return n},n}function q(){var n=Object(u.a)(["\n    width: 80%;\n    max-width: 350px;\n    min-width: 250px;\n    height: 60px;\n    border: none;\n    margin: 1rem, 0;\n    margin-bottom: 2rem;\n    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);\n    border-radius: 8px;\n    background-color: #70edb9;\n    color: #fff;\n    font-size: 26px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: all 0.2s ease-in;\n    &:hover {\n        transform: translateY(-3px);\n    }\n    &:disabled {\n        background-color: #fe2f75;\n    }\n"]);return q=function(){return n},n}function B(){var n=Object(u.a)(["\n    h1 {\n        color: #666666;\n        margin-bottom: 1rem;\n        text-align: center;\n    }\n"]);return B=function(){return n},n}var R=function(n){var e=n.each,t=n.dateInfo,r=(new Date).toLocaleDateString().split("."),a=r[0],o=r[1].substring(1),c=r[2].substring(1),i=a+(o=1===o.length?"0"+o:r[1]);return!!t[i]&&(!!t[i][e.name]&&!t[i][e.name].every((function(n){return n!==c})))},U=O.b.div(B()),K=O.b.button(q()),V=O.b.div(H()),Q=function(n){var e=n.colName,t=n.groupData,a=n.groupName,o=n.mode,c=n.profile,i=n.dateInfo,u=t[a].map((function(n){return Object(r.jsx)("div",{children:Object(r.jsx)("ul",{children:"edit"===o?Object(r.jsxs)(V,{children:[Object(r.jsxs)("div",{className:"Name",children:[n.name,"(",n.korean,n.phone,")"]}),Object(r.jsx)(G,{groupData:t,colName:e,groupName:a,eachName:n.name})]}):Object(r.jsx)(K,{onClick:function(){window.confirm("".concat(n.name," \ucd9c\uc11d\uc774 \ub9de\uc2b5\ub2c8\uae4c?"))&&(X({each:n,colName:e,dateInfo:i}),J({profile:c,each:n,colName:e,dateInfo:i}))},disabled:R({each:n,dateInfo:i}),children:n.name})})})}));return Object(r.jsx)(U,{children:"edit"===o?Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Member List"}),Object(r.jsx)("ul",{children:u}),Object(r.jsx)(P,{colName:e,groupData:t,groupName:a})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Member List"}),Object(r.jsx)("ul",{children:u})]})})};function Z(){var n=Object(u.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 1rem;\n    h3 {\n        color: #666666;\n        margin-top: 0rem;\n        margin-bottom: 1rem;\n    }\n    button {\n        width: 80%;\n        max-width: 350px;\n        min-width: 250px;\n        height: 40px;\n        border: none;\n        margin: 1rem, 0;\n        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);\n        border-radius: 8px;\n        background-color: #70edb9;\n        color: #fff;\n        font-weight: 600;\n        cursor: pointer;\n        transition: all 0.2s ease-in;\n        &:hover {\n            transform: translateY(-3px);\n        }\n    }\n"]);return Z=function(){return n},n}var $=O.b.form(Z()),_=function(n){var e=n.colName,t=(n.groupData,n.groupList),o=Object(a.useState)(""),c=Object(d.a)(o,2),i=c[0],u=c[1],s=function(){var n=Object(h.a)(f.a.mark((function n(r){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),!t.every((function(n){return n!==i}))){n.next=6;break}return n.next=4,m.collection(e).doc("Data").set(Object(W.a)({},i,[]),{merge:!0});case 4:n.next=8;break;case 6:return window.alert("\ub3d9\uc77c\ud55c \uadf8\ub8f9\uba85\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4."),n.abrupt("return");case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.jsx)("div",{children:Object(r.jsxs)($,{onSubmit:s,children:[Object(r.jsx)("h3",{children:"Add Class"}),Object(r.jsx)(I,{name:"classGroup",placeholder:"Class Name",onChange:function(n){return u(n.target.value)}}),Object(r.jsx)("button",{children:"ADD"})]})})};function nn(){var n=Object(u.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 4rem;\n    h3 {\n        color: #666666;\n        margin-top: 2rem;\n        margin-bottom: 1rem;\n    }\n    button {\n        width: 80%;\n        max-width: 350px;\n        min-width: 250px;\n        height: 40px;\n        border: none;\n        margin: 1rem, 0;\n        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);\n        border-radius: 8px;\n        background-color: #1c1939;\n        color: #fff;\n        font-weight: 600;\n        cursor: pointer;\n        transition: all 0.2s ease-in;\n        &:hover {\n            transform: translateY(-3px);\n        }\n    }\n"]);return nn=function(){return n},n}var en=O.b.div(nn()),tn=function(n){var e=n.colName,t=n.groupName,a=(n.groupData,Object(p.f)()),o=function(){var n=Object(h.a)(f.a.mark((function n(r){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.next=3,m.doc("".concat(e,"/Data")).update(Object(W.a)({},t,g.firestore.FieldValue.delete()));case 3:a.push("/edit");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.jsxs)(en,{children:[Object(r.jsx)("h3",{children:"Delete Class"}),Object(r.jsxs)("button",{onClick:o,children:["\uc120\ud0dd \uc0ad\uc81c(",t,")"]})," "]})};function rn(){var n=Object(u.a)(["\n                  background-color: #7165e3;\n              "]);return rn=function(){return n},n}function an(){var n=Object(u.a)(["\n                  background-color: #ffa689;\n              "]);return an=function(){return n},n}function on(){var n=Object(u.a)(["\n    /* display: flex;\n    flex-direction: row;\n    align-items: center; */\n\n    width: 10%;\n    max-width: 100px;\n    min-width: 80px;\n    height: 50px;\n    border: none;\n    margin-right: 0.5rem;\n    margin-top: 0.5rem;\n    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);\n    border-radius: 8px;\n    /* background-color: #7165e3; */\n    background-color: #7165e3;\n    ",";\n    color: #fff;\n    font-weight: 500;\n    cursor: pointer;\n    transition: all 0.2s ease-in;\n    &:hover {\n        transform: translateY(-3px);\n    }\n    &:focus {\n        background: #ffa689;\n    }\n"]);return on=function(){return n},n}function cn(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex-flow: wrap;\n\n    margin-bottom: 3rem;\n"]);return cn=function(){return n},n}function un(){var n=Object(u.a)(["\n    width: 100%;\n    /* height: 100%; */\n    display: flex;\n    flex-direction: column;\n    /* margin-top: 2rem; */\n    justify-content: default(flex-start);\n    align-items: center;\n    @media (min-width: 900px) {\n        width: 50%;\n    }\n"]);return un=function(){return n},n}function sn(){var n=Object(u.a)(["\n    width: 100%;\n    /* height: 100%; */\n    display: flex;\n    flex-direction: column;\n    /* justify-content: center; */\n    align-items: center;\n    margin-bottom: 1rem;\n    h1 {\n        color: #666666;\n        margin-bottom: 0.5rem;\n    }\n    @media (min-width: 900px) {\n        width: 50%;\n        margin-bottom: 0rem;\n    }\n"]);return sn=function(){return n},n}function dn(){var n=Object(u.a)(["\n    display: --webkit-flex;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n    flex-flow: row wrap;\n    width: 100%;\n\n    @media (min-width: 900px) {\n        width: 900px;\n        margin-left: auto;\n        margin-right: auto;\n    }\n"]);return dn=function(){return n},n}var ln=O.b.div(dn()),pn=O.b.div(sn()),bn=O.b.div(un()),fn=O.b.div(cn()),hn=O.b.button(on(),(function(n){return n.eachGroup===n.groupName?Object(O.a)(an()):Object(O.a)(rn())})),xn=function(n){var e=n.group,t=n.groupData,o=n.colName,c=n.mode,i=n.profile,u=n.dateInfo,s=Object(a.useState)(""),l=Object(d.a)(s,2),p=l[0],b=l[1],f=Object.keys(t);f.sort();var h=f.map((function(n){return Object(r.jsx)(hn,{eachGroup:n,groupName:p,onClick:function(){return function(n){b(n)}(n)},children:n})}));return Object(r.jsxs)(ln,{children:[Object(r.jsxs)(pn,{children:[Object(r.jsx)("h1",{children:"Class List"}),Object(r.jsx)(fn,{children:Object(r.jsx)("ul",{children:h})}),"edit"===c?Object(r.jsxs)("div",{children:[Object(r.jsx)(_,{groupList:f,group:e,groupData:t,colName:o}),p?Object(r.jsx)(tn,{groupData:t,colName:o,groupName:p}):""]}):Object(r.jsx)("div",{})]}),t[p]?Object(r.jsx)(bn,{children:Object(r.jsx)(Q,{groupName:p,colName:o,groupData:t,mode:c,profile:i,dateInfo:u})}):""]})};function jn(){var n=Object(u.a)(["\n    h1 {\n        color: #666666;\n        margin-bottom: 1rem;\n        text-align: center;\n    }\n    button {\n        width: 80%;\n        max-width: 350px;\n        min-width: 250px;\n        height: 40px;\n        border: none;\n        margin: 1rem, 0;\n        margin-bottom: 0.5rem;\n        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);\n        border-radius: 8px;\n        background-color: #70edb9;\n        color: #fff;\n        font-size: 24px;\n        font-weight: 600;\n        cursor: pointer;\n        transition: all 0.2s ease-in;\n        &:hover {\n            transform: translateY(-3px);\n        }\n    }\n"]);return jn=function(){return n},n}var mn=O.b.div(jn()),gn=function(n){var e=n.userObj.uid.substring(0,9),t=function(){var n=Object(h.a)(f.a.mark((function n(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.collection(e).doc("Data").set({});case 2:return n.next=4,m.collection(e).doc("Profile").set({myphone:"My Phone Number"});case 4:return n.next=6,m.collection(e).doc("Date").set({});case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(r.jsxs)(mn,{children:[Object(r.jsx)("h1",{children:"\uc0c8\ub85c \uc2dc\uc791\ud558\uae30"}),Object(r.jsx)("button",{onClick:t,children:"START"})]})};function On(){var n=Object(u.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n\n    justify-content: space-evenly;\n"]);return On=function(){return n},n}var vn=O.b.div(On()),wn=function(n){var e=n.userObj,t=n.group,a=n.groupData,o=n.colName,c=n.profile,i=n.dateInfo;return Object(r.jsx)(vn,{children:t?Object(r.jsx)("div",{children:Object(r.jsx)(xn,{group:t,groupData:a,colName:o,mode:"send",profile:c,dateInfo:i})}):Object(r.jsx)("div",{children:Object(r.jsx)(gn,{userObj:e})})})};function yn(){var n=Object(u.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 1rem;\n    h3 {\n        color: #666666;\n        margin-top: 2rem;\n        margin-bottom: 1rem;\n    }\n    button {\n        width: 80%;\n        max-width: 250px;\n        min-width: 250px;\n        height: 40px;\n        border: none;\n        margin: 1rem, 0;\n        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);\n        border-radius: 8px;\n        background-color: #70edb9;\n        color: #fff;\n        font-weight: 600;\n        cursor: pointer;\n        transition: all 0.2s ease-in;\n        &:hover {\n            transform: translateY(-3px);\n        }\n    }\n"]);return yn=function(){return n},n}var kn=O.b.form(yn()),Nn=function(n){var e=n.colName,t=n.profile,o=Object(p.f)(),c=Object(a.useState)(""),i=Object(d.a)(c,2),u=i[0],s=i[1],l=function(){var n=Object(h.a)(f.a.mark((function n(t){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,m.doc("".concat(e,"/Profile")).set({myphone:u});case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:Object(r.jsxs)(kn,{onSubmit:l,children:[Object(r.jsxs)("h3",{children:["My Phone Number: ",t.myphone]}),Object(r.jsx)(I,{name:"myphone",placeholder:"My phone Number",onChange:function(n){return s(n.target.value)}}),Object(r.jsx)("button",{children:"Change"})]})}),Object(r.jsxs)(kn,{children:[Object(r.jsx)("h3",{children:"LogOut"}),Object(r.jsx)("button",{onClick:function(){j.signOut(),o.push("/")},children:"Log Out"})]})]})};function Dn(){var n=Object(u.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n\n    justify-content: space-evenly;\n"]);return Dn=function(){return n},n}var Sn=O.b.div(Dn()),In=function(n){var e=n.group,t=n.groupData,a=n.colName,o=n.dateInfo;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(Sn,{children:Object(r.jsx)(xn,{group:e,groupData:t,colName:a,mode:"edit",dateInfo:o})})})};t(52);function Cn(){var n=Object(u.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n\n    justify-content: space-evenly;\n"]);return Cn=function(){return n},n}var Ln=O.b.div(Cn()),An=function(n){return Object(r.jsx)(Ln,{children:Object(r.jsx)("span",{children:"2nd Deck"})})};function En(){var n=Object(u.a)(["\n    list-style: none;\n    display: flex;\n    flex-flow: row nowrap;\n    a {\n        padding: 18px 10px;\n        text-decoration: none;\n        color: #0008fc;\n        text-transform: uppercase;\n        font-size: 12px;\n        text-align: center;\n        font-weight: 600;\n    }\n    @media (max-width: 768px) {\n        flex-flow: column nowrap;\n        background-color: #eefcff;\n        position: fixed;\n        transform: ",";\n        top: 0;\n        right: 0;\n        height: 100vh;\n        width: 150px;\n        padding-top: 3.5rem;\n        transition: transform 0.3s ease-in-out;\n        a {\n            color: #13a326;\n            text-transform: uppercase;\n            font-size: 12px;\n            text-align: center;\n            font-weight: 600;\n        }\n    }\n"]);return En=function(){return n},n}var zn=O.b.ul(En(),(function(n){return n.open?"translateX(0)":"translateX(100%)"})),Yn=function(n){var e=n.open;return Object(r.jsxs)(zn,{open:e,children:[Object(r.jsx)(l.b,{to:"/",children:"Home"}),Object(r.jsx)(l.b,{to:"/profile",children:"Profile"}),Object(r.jsx)(l.b,{to:"/edit",children:"Edit"}),Object(r.jsx)(l.b,{to:"/about",children:"About"})]})};function Mn(){var n=Object(u.a)(["\n    width: 2rem;\n    height: 2rem;\n    position: fixed;\n    top: 15px;\n    right: 20px;\n    z-index: 20;\n    display: none;\n    @media (max-width: 768px) {\n        display: flex;\n        justify-content: space-around;\n        flex-flow: column nowrap;\n    }\n    div {\n        width: 2rem;\n        height: 0.25rem;\n        background-color: ",";\n        border-radius: 10px;\n        transform-origin: 1px;\n        transition: all 0.3s linear;\n        &:nth-child(1) {\n            transform: ",";\n        }\n        &:nth-child(2) {\n            transform: ",";\n            opacity: ",";\n        }\n        &:nth-child(3) {\n            transform: ",";\n        }\n    }\n"]);return Mn=function(){return n},n}var Pn=O.b.div(Mn(),(function(n){return n.open?"#ccc":"#333"}),(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"translateX(100%)":"translateX(0)"}),(function(n){return n.open?0:1}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"})),Tn=function(){var n=Object(a.useState)(!1),e=Object(d.a)(n,2),t=e[0],o=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(Pn,{open:t,onClick:function(){return o(!t)},children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]}),Object(r.jsx)(Yn,{open:t})]})};function Fn(){var n=Object(u.a)(["\n    width: 100%;\n    height: 55px;\n    border-bottom: 2px solid #f1f1f1;\n    padding: 0 20px;\n    display: flex;\n    justify-content: space-between;\n    .logo {\n        padding: 15px 0;\n        color: #48484d;\n        font-size: 25px;\n        font-weight: 600;\n        text-decoration: none;\n    }\n"]);return Fn=function(){return n},n}var Gn=O.b.nav(Fn()),Jn=function(){return Object(r.jsxs)(Gn,{children:[Object(r.jsx)(l.b,{to:"/",className:"logo",children:"MY TREE ENGLISH"}),Object(r.jsx)(Tn,{})]})};function Wn(){var n=Object(u.a)(["\n    padding: 30px;\n    min-width: 350px;\n"]);return Wn=function(){return n},n}var Xn=O.b.div(Wn()),Hn=function(n){var e=n.isLoggedIn,t=n.userObj,a=n.group,o=n.groupData,c=n.colName,i=n.profile,u=n.dateInfo;return Object(r.jsxs)(l.a,{children:[e&&Object(r.jsx)(Jn,{}),Object(r.jsx)(p.c,{children:e?Object(r.jsxs)(Xn,{children:[Object(r.jsx)(p.a,{exact:!0,path:"/",children:Object(r.jsx)(wn,{userObj:t,group:a,groupData:o,colName:c,profile:i,dateInfo:u})}),Object(r.jsx)(p.a,{exact:!0,path:"/about",children:Object(r.jsx)(An,{})}),Object(r.jsx)(p.a,{exact:!0,path:"/profile",children:Object(r.jsx)(Nn,{colName:c,profile:i})}),Object(r.jsx)(p.a,{exact:!0,path:"/edit",children:Object(r.jsx)(In,{group:a,groupData:o,colName:c,dateInfo:u})})]}):Object(r.jsx)(Xn,{children:Object(r.jsx)(p.a,{exact:!0,path:"/",children:Object(r.jsx)(z,{})})})})]})};function qn(){var n=Object(u.a)(["\n    /* background-position: center; */\n    /* background-size: cover; */\n    /* background-repeat: no-repeat; */\n    /* background-attachment: fixed; */\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n"]);return qn=function(){return n},n}function Bn(){var n=Object(u.a)(["\n    background: #ffffff;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n"]);return Bn=function(){return n},n}var Rn=O.b.div(Bn()),Un=O.b.div(qn()),Kn=function(){var n=Object(a.useState)(!1),e=Object(d.a)(n,2),t=e[0],o=e[1],c=Object(a.useState)(!1),i=Object(d.a)(c,2),u=i[0],l=i[1],p=Object(a.useState)(null),b=Object(d.a)(p,2),f=b[0],h=b[1],x=Object(a.useState)(""),g=Object(d.a)(x,2),O=g[0],v=g[1],w=Object(a.useState)(!1),y=Object(d.a)(w,2),k=y[0],N=y[1],D=Object(a.useState)([]),S=Object(d.a)(D,2),I=S[0],C=S[1];return Object(a.useEffect)((function(){j.onAuthStateChanged((function(n){n?(l(!0),h(n)):l(!1),o(!0)}))}),[u]),Object(a.useEffect)((function(){null!==f&&v(f.uid.substring(0,9))}),[f]),Object(a.useEffect)((function(){""!==O&&m.collection(O).onSnapshot((function(n){var e=n.docs.map((function(n){return Object(s.a)({},n.data())}));C(e),0!==e.length&&N(!0)}))}),[O]),Object(r.jsx)(Rn,{children:Object(r.jsx)(Un,{children:t?Object(r.jsx)(Hn,{isLoggedIn:u,userObj:f,groupData:I[0],profile:I[2],dateInfo:I[1],colName:O,group:k}):"Initializing..."})})};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(Kn,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.c1089b29.chunk.js.map