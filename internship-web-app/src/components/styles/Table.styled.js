import styled from "styled-components";

export const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
    font-size: 18px;
    border: 1px solid #dddddd;

    td, th {
        text-align: left;
        padding: 12px;
        border: 1px solid black;
    }
      
    tr:nth-child(even):not(:first-child) {
        background-color: #dddddd;
    }

    td:nth-child(2) {
        font-weight: bold;
    }

    td button {
        margin: 0;
    }
`

export const StyledTable_NoBorder = styled(StyledTable)`
    td, th {
        border: none;
    }
`

export const StyledTableHead = styled.thead`
    font-weight: bold;
    border-bottom: 1px solid black;
    text-align: center;
`