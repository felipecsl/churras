import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";
import "./matchMedia";

test("renders dashboard layout", () => {
  render(<App networkToPriceProviders={{}} tokenDatabases={{}} />);
  const titleElement = screen.getAllByText(/Dashboard/i);
  expect(titleElement).toHaveLength(3);
  titleElement.forEach((t: any) => expect(t).toBeInTheDocument());
});
