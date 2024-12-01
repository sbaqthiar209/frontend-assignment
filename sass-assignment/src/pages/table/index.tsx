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
    const [rowsDisplayed,setRowsDisplayed]= React.useState<RowModel[]>([]);
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

  const getDataFromApi = async () =>{
    const url = "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response failed, the status is : ${response.status}`)
        }
        const data = await response.json();
        Array.isArray(data) && data.length>0 && setRowsDisplayed(data);

    }catch(error){
        console.log("Api failed", error)
    }
  }
  React.useEffect(()=>{
    getDataFromApi();
  },[])

    return (
        <>
        <h2>Reusable Table Component</h2>
        <StyledTable rows={rowsDisplayed} columns={colsDisplayed}/>
        </>
    )
}
export default Table;