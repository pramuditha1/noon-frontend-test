import React from "react";
import { render } from "@testing-library/react";
import LoadingSpinner from "../LoadingSpinner";

describe("LoadingSpinner component", () => {
  test("renders without errors", () => {
    render(<LoadingSpinner />);
  });
});
