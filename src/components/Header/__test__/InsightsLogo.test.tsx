import React from "react";
import { screen, render } from "@testing-library/react";
import InsightsLogo from "../InsightsLogo";

describe("testing the Insights Logo", () => {
  it("should render the Insights logo", () => {
    render(<InsightsLogo />);
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });
});