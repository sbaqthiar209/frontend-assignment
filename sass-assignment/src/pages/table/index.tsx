import React from 'react';
import dummyData from '../../../frontend-assignment.json';
import StyledTable, { ColumnModel, RowModel } from '../../components/StyledTable';
// interface ColumnModel {
//     accessor:string;
//     text:string;
// }
// interface RowModel {
//     [key:string]: string | number;
// }
// interface StyledTablePropsType {
//     name?: string;
//     rows:RowModel[];
//     columns:ColumnModel[];
// }
// const Cell = ()=>{
//     return (
//         <>
//         </>
//     )
// }
// const StyledRow = (props:{key:number,newRow: RowModel})=>{
//     return (
//         <tr key={props.key}>
//                 {

//                 }
//         </tr>
//     )
// }
const Table = ()=> {
    // const {rows,columns}= props;
    const [rowsDisplayed,setRowsDisplayed]= React.useState<RowModel[]>(dummyData);
    const [colsDisplayed,setColsDisplayed]= React.useState<ColumnModel[]>([
        {
            accessor:"s.no",
            text:"S.No."
        },
        {
            accessor:"percentage.funded",
            text:"Percentage funded"
        },
        {
            accessor:"amt.pledged",
            text:"Amount pledged"
        },
    ]);

    return (
        <>
        <StyledTable rows={rowsDisplayed} columns={colsDisplayed}/>
        </>
    )
}
export default Table;