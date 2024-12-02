import { render, screen, waitFor } from "@testing-library/react";
import Table from "../../../src/pages/table";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("Table", () => {
  test("renders Table", async () => {
    render(<Table />);
    expect(screen.getByTestId("tableTestId")).toBeInTheDocument();
  });


  test("test if Table is displaying data from API", async () => {
    render(<Table />);
    const tableElement = screen.getByTestId("tableTestId");
    expect(tableElement).toBeInTheDocument();
    const testAmount = "15823";

    await waitFor(() => screen.getByText("15823"));
    expect(screen.getByText("15823")).toBeInTheDocument();
    // await new Promise((r) => setTimeout(r, 2000));
    // const cellText = await screen.findByText(testAmount);
    // const cellText = screen.getByTestId("tableRowTestId");
    // screen.debug();
    // expect(cellText).toBeInTheDocument();
  });


  test("Pagination Next and previous button test", async () => {
    render(<Table />);
    const tableElement = screen.getByTestId("tableTestId");
    expect(tableElement).toBeInTheDocument();
    const testAmount = "15823";

    await waitFor(() => screen.getByText("15823"));
    expect(screen.getByText("15823")).toBeInTheDocument();
    const nextButton = screen.getByText("Next");
    await userEvent.click(nextButton);
    expect(screen.getByText("577844")).toBeInTheDocument();

    const prevButton = screen.getByText("Prev");
    await userEvent.click(prevButton);
    expect(screen.getByText("15823")).toBeInTheDocument();
  });
});
