import React from "react";
import "./matchMedia";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders dashboard layout", () => {
  render(<App />);
  const titleElement = screen.getAllByText(/Dashboard/i);
  expect(titleElement).toHaveLength(3);
  titleElement.forEach((t: any) => expect(t).toBeInTheDocument());
});
