import styled from 'styled-components';

export const Form = styled.form`
    margin: 120px;
    width: 50%;
    text-align: center;
`;

export const Input = styled.input`
    width: 100%;
    border:2px solid rgba(0,0,0,0.2);
    border-radius: 12px;
    height: 42px;
`;

export const Select = styled.select`
    display: inline-block;
    width: 100%;
    cursor: pointer;
    padding: 7px 10px;
    height: 42px;
    outline: 0; 
    border: 0;
    border-radius: 0;
    background: #f0f0f0;
    color: #7b7b7b;
    font-size: 1em;
    color: #999;
    border:2px solid rgba(0,0,0,0.2);
    border-radius: 12px;
    position: relative;
    transition: all 0.25s ease;
`;

export const SubmitInput = styled.input`
    color: white;
    background: #14101A;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    border: none;
    width: 11rem;
    height: 40px;
    border:2px solid rgba(0,0,0,0.2);
    border-radius: 12px;

    &:hover {
        cursor: pointer;
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    }
`;
