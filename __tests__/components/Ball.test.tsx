import React from "react";
import { render } from "@testing-library/react-native";
import Ball from "../../src/components/Ball";

describe("Ball component", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<Ball />);
    const ball = getByTestId("ball");
    expect(ball).toBeDefined();
  });
});
