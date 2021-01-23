import React from "react";
import styled from "styled-components";

export const ModifyInput = ({ type, placeholder, onChange }) => {
    return (
        <Container>
            <StyledInput
                type={type ? type : "text"}
                placeholder={placeholder && placeholder}
                onChange={onChange}
                requrired
                autoComplete="off"
            />
        </Container>
    );
};
const StyledInput = styled.input`
    width: 100%;
    max-width: 150px;
    min-width: 100px;
    height: 40px;
    border: none;
    margin-bottom: 1rem;
    margin-right: 0.5rem;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 0 1rem;
    transition: all 0.2s ease-in;
    &:hover {
        transform: translateY(-3px);
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default ModifyInput;
