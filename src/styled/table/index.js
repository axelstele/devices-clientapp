import styled from 'styled-components';

const StyledTable = styled.table`
    border-collapse: collapse;
    background: white;
    width: 100%;
    text-align: center;
    vertical-align: middle;
    margin-top: 120px;

    th, td {
        border: 1px solid black;
        padding: 8px;
    }

    thead th {
        width: 25%;
    }

    thead {
        background-color: #333;
        color: white;
        font-size: 0.875rem;
        text-transform: uppercase;
    }
`;

export default StyledTable;
