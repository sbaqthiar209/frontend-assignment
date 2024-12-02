import React from "react";
import "./styledTable.css";
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
  const StyledRow = (props: { keyVal: number; newRow: RowModel }) => {
    return (
      <tr key={props.keyVal} data-testid="tableRowTestId">
        {Array.isArray(columns) &&
          columns.length > 0 &&
          columns.map((item, key) => {
            return (
              <React.Fragment key={key}>
                <Cell
                  isHeading={false}
                  newCol={{
                    accessor: item.accessor,
                    text: props.newRow[item.accessor]?.toString() ?? "",
                  }}
                />
              </React.Fragment>
            );
          })}
      </tr>
    );
  };
  const Cell = (props: { newCol: ColumnModel; isHeading: boolean }) => {
    return (
      <>
        {props.isHeading ? (
          <th key={props.newCol.accessor}>{props.newCol.text}</th>
        ) : (
          <td key={props.newCol.accessor}>{props.newCol.text}</td>
        )}
      </>
    );
  };
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [pageSize, setPageSize] = React.useState<number>(5);
  const pagination = currentPage * pageSize,
    roundedSize = Math.round(rows.length / pageSize);
  const totalPages =
    rows.length % pageSize === 0 ? roundedSize : roundedSize + 1;
  const handleNextClick = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePrevClick = () => {
    if (currentPage === 0) return;
    setCurrentPage((prev) => prev - 1);
  };
  return (
    <div className={"styledTable"}>
      <div className="tableWrapper">
        <table>
          <thead>
            <tr>
              {Array.isArray(columns) &&
                columns.length > 0 &&
                columns.map((item, key) => {
                  return (
                    <React.Fragment key={key}>
                      <Cell
                        newCol={{
                          accessor: item.accessor,
                          text: item.text,
                        }}
                        isHeading={true}
                      />
                    </React.Fragment>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {Array.isArray(rows) &&
              rows.length > 0 &&
              rows.slice(pagination - pageSize, pagination).map((item, key) => {
                return (
                  <React.Fragment key={key}>
                    <StyledRow keyVal={key} newRow={item} />
                  </React.Fragment>
                );
              })}
          </tbody>
        </table>
      </div>
      {/* <tfoot> */}
      <div className="pagination-container">
        <select
          onChange={(e) =>
            e.target.value && setPageSize(Number(e.target.value))
          }
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
        <button onClick={handlePrevClick} disabled={currentPage === 1}>
          Prev
        </button>
        Page {currentPage}
        <button onClick={handleNextClick} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      {/* </tfoot> */}
    </div>
  );
};
export default StyledTable;
