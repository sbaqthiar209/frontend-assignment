import React from "react";
import dummyData from "../../../frontend-assignment.json";
import './styledTable.css';
export interface ColumnModel {
  accessor: string;
  text: string;
}
export interface RowModel {
  [key: string]: string | number;
}
interface StyledTablePropsType {
  name?: string;
  rows: RowModel[];
  columns: ColumnModel[];
}

const StyledTable = (props: StyledTablePropsType) => {
  const { rows, columns } = props;
  // const [rowsDisplayed,setRowsDisplayed]= React.useState<RowModel[]>(rows);
  // const [colsDisplayed,setColsDisplayed]= React.useState<ColumnModel[]>(columns);
  const StyledRow = (props: { keyVal: number; newRow: RowModel }) => {
    return (
      <tr key={props.keyVal}>
        {Array.isArray(columns) &&
          columns.length > 0 &&
          columns.map((item, key) => {
            return (
              <Cell
              isHeading={false}
                newCol={{
                  accessor: item.accessor,
                  text: props.newRow[item.accessor]?.toString() ?? "",
                }}
              />
            );
          })}
      </tr>
    );
  };
  const Cell = (props: { newCol: ColumnModel, isHeading: boolean }) => {
    return (
        <>
        {
            props.isHeading ? (<th key={props.newCol.accessor}>{props.newCol.text}</th>):(<td key={props.newCol.accessor}>{props.newCol.text}</td>)
        }
        </>
    );
  };
  return (
    <div className={"styledTable"}>
      Hi
      <table>
        <thead>
          {Array.isArray(columns) &&
            columns.length > 0 &&
            columns.map((item, key) => {
              return (
                <Cell
                  newCol={{
                    accessor: item.accessor,
                    text: item.text,
                  }}
                  isHeading={true}
                />
              );
            })}
        </thead>
        <tbody>
          {Array.isArray(rows) &&
            rows.length > 0 &&
            rows.map((item, key) => {
              return <StyledRow keyVal={key} newRow={item} />;
            })}
        </tbody>
      </table>
    </div>
  );
};
export default StyledTable;
