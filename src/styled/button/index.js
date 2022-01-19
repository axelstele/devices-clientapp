import styled from 'styled-components';

const Button = styled.button`
    display: inline-block;
    border-radius: 5px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    color: white;
    border: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

    &:hover {
        cursor: pointer;
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    }
`;

export const AddButton = styled(Button)`
    background: #50C0B8;
    height: 60px;
`;

export const EditButton = styled(Button)`
    background: #BEC050;
`;

export const DeleteButton = styled(Button)`
    background: #C05050;
`;
