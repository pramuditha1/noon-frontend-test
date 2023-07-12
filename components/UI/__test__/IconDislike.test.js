import React from "react";
import { render } from "@testing-library/react";
import IconDislike from "../IconDislike";

describe("Dislike component", () => {
  test("renders without errors", () => {
    render(<IconDislike />);
  });
});
