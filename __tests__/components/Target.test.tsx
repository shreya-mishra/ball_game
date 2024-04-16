import React from "react";
import { render } from "@testing-library/react-native";
import Target from "../../src/components/Target";

describe("Target component", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<Target />);
    const target = getByTestId("target");
    expect(target).toBeDefined();
  });
});
