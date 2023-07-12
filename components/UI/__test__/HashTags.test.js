import React from "react";
import { render } from "@testing-library/react";
import HashTags from "../HashTags";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

expect.extend({ toBeInTheDocument }); // Extend the expect function with custom matchers

describe("HashTags component", () => {
  test("renders without errors", () => {
    render(<HashTags tagValues={["tag1", "tag2", "tag3"]} />);
  });

  test("renders the correct hash tags", () => {
    const screen = render(<HashTags tagValues={["tag1", "tag2", "tag3"]} />);
    const tagsList = screen.getByText("#tag1 #tag2 #tag3");
    expect(tagsList).toBeInTheDocument();
  });

  // Add more tests if necessary
});
