import React from "react";
import StyledTable, {
  ColumnModel,
  RowModel,
} from "../../components/StyledTable";
const Table = () => {
  const [rowsDisplayed, setRowsDisplayed] = React.useState<RowModel[]>([]);
  const colsDisplayed: ColumnModel[] = [
    {
      accessor: "s.no",
      text: "S.No.",
    },
    {
      accessor: "percentage.funded",
      text: "Percentage funded",
    },
    {
      accessor: "amt.pledged",
      text: "Amount pledged",
    },
  ];
  const getDataFromApi = async () => {
    const url =
      "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response failed, the status is : ${response.status}`);
      }
      const data = await response.json();
      Array.isArray(data) && data.length > 0 && setRowsDisplayed(data);
    } catch (error) {
      console.log("Api failed", error);
    }
  };
  React.useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div data-testid="tableTestId">
      <h2>Reusable Table Component</h2>
      <StyledTable rows={rowsDisplayed} columns={colsDisplayed} />
    </div>
  );
};
export default Table;
