import React, { useState } from "react";
import { dbService } from "../fbase";
import { ModifyInput } from "../components/ModifyInput";
import styled, { css } from "styled-components";

const ModifyMember = ({ colName, groupData, groupName }) => {
    const [newMember, setNewMember] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newGroup, setNewGroup] = useState("");
    const [memName, setMemName] = useState("");
    const groupList = Object.keys(groupData);
    groupList.sort();
    const create = (props) => {
        setMemName(props);
    };
    const selectGroup = groupList.map((group) => (
        <option value={group}>{group}</option>
    ));

    const memberList = groupList.map(function (eachGroup) {
        const member = groupData[eachGroup].map(function (each) {
            return showMem(each, groupData, eachGroup);
        });

        return member;
    });
    function showMem(each, groupData, eachGroup) {
        const onSubmit = async (event) => {
            event.preventDefault();

            groupData[newGroup].push({
                name: newMember,
                phone: newPhone,
                korean: "",
                group: newGroup,
            });
            await dbService.doc(`${colName}/Data`).set(groupData);
        };
        return (
            <div>
                {/* <h3>
                    {each.name}({each.phone})
                </h3> */}
                <MemButton
                    eachName={each.name}
                    memName={memName}
                    onClick={() => create(each.name)}
                >
                    {each.name}
                </MemButton>
                {each.name === memName ? (
                    <Form onSubmit={onSubmit}>
                        <select value={each.group}>{selectGroup}</select>

                        <ModifyInput
                            name="member"
                            placeholder={each.name}
                            onChange={(e) => setNewMember(e.target.value)}
                        />

                        <ModifyInput
                            name="phone"
                            type="phone"
                            placeholder={each.phone}
                            onChange={(e) => setNewPhone(e.target.value)}
                        />
                        <button>Modify</button>
                    </Form>
                ) : null}
            </div>
        );
    }
    // const memberList = groupData[groupName].map((each) => (
    //     <div>
    //         <ul>
    //             <div className="Name">
    //                 {each.name}({each.korean}
    //                 {each.phone})
    //             </div>
    //         </ul>
    //     </div>
    // ));

    // const addData = (groupData) => {
    //     groupData.push({
    //         name: newMember,
    //         phone: newPhone,
    //         group: newGroup,
    //     });
    // };
    return (
        <Container>
            <li>{memberList}</li>
            {/* <Form onSubmit={onSubmit}>
                <h1>Modify Member</h1>
                <Input
                    name="member"
                    placeholder="Member Name"
                    onChange={(e) => setNewMember(e.target.value)}
                />
               
                <Input
                    name="phone"
                    type="phone"
                    placeholder="Phone Number"
                    onChange={(e) => setNewPhone(e.target.value)}
                />
                <button>Modify</button>
            </Form> */}
        </Container>
    );
};
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    h1 {
        color: #666666;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    select {
        /* font-size: 18px; */
        padding: 6px;
        font-weight: 600;
        border-radius: 8px;
        margin-bottom: 1rem;
        height: 40px;
        padding: 0 1rem;
        border: none;
        background-color: #f5f5f5;
        transition: all 0.2s ease-in;
        &:hover {
            transform: translateY(-3px);
        }
    }
    button {
        width: 75%;
        max-width: 110px;
        min-width: 100px;
        height: 40px;
        border: none;
        margin: 1rem, 0;
        margin-bottom: 1rem;

        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        background-color: #70edb9;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease-in;
        &:hover {
            transform: translateY(-3px);
        }
    }
`;
const MemButton = styled.button`
    /* display: flex;
    flex-direction: row;
    align-items: center; */

    width: 10%;
    max-width: 110px;
    min-width: 90px;
    height: 50px;
    border: none;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #7165e3;
    ${(props) =>
        props.eachName === props.memName
            ? css`
                  background-color: #ffa689;
              `
            : css`
                  background-color: #7165e3;
              `};
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
        transform: translateY(-3px);
    }
    &:focus {
        background: #ffa689;
    }
`;
const Container = styled.div`
    display: --webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    width: 100%;

    @media (min-width: 900px) {
        width: 900px;
        margin-left: auto;
        margin-right: auto;
    }
`;
export default ModifyMember;
