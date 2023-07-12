import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import HtmlMessage from "../HtmlMessage";

expect.extend({ toBeInTheDocument }); // Extend the expect function with custom matchers

describe("HtmlMessage component", () => {
  const props = {
    message: "html message",
  };

  test("renders HtmlMessage component properly", () => {
    render(
      <HtmlMessage message={props.message} />
    );

    // Assertions
    expect(screen.getByText("html message")).toBeInTheDocument();
  });
});
