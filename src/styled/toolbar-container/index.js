import styled from 'styled-components';

export const ToolbarContainer = styled.div`
    align-items: center;
    display: flex;
    background: #E2E0E5;
    flex-direction: row;
    justify-content: space-around;
    min-height: 120px;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
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
