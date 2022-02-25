import styled, {css} from "styled-components";

export const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
    font-size: 18px;
    border: 1px solid #cccccc;
    overflow-x: scroll;
    margin: 1em 0;

    td, th {
        text-align: left;
        padding: 12px;
        border: 1px solid black;
    }
      
    tr:nth-child(even):not(:first-child) {
        background-color: ${({ theme }) => theme.table1};
    }

    td button {
        margin: 0;
    }

    ${props => props.NoBorder && css`
        td, th {
            border: none;
        }
    `}

    ${props => props.Bold && css`
        td:first-child {
            font-weight: bold;
        }

        td:nth-child(2) {
            font-weight: normal;
        }
`}
`

export const StyledTableHead = styled.thead`
    font-weight: bold;
    border-bottom: 3px solid black;
    text-align: center;
    background-color: ${({ theme }) => theme.table1};

    ${props => props.Symetric && css`
    font-weight: bold;

    th {
        width: 50%;
        background-color: ${({ theme }) => theme.table1};
    }
`}
`

export const StyledTableFoot = styled.tfoot`
    font-weight: bold;
    border-top: 3px solid black;
    text-align: center;
    background-color: #dddddd;
`