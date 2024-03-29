import React from "react";
import { render } from "@testing-library/react-native";
import Playground from "../../src/components/Playground";

describe("Playground component", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<Playground />);
    const playground = getByTestId("playground");
    expect(playground).toBeDefined();
  });

  test("contains Target component", () => {
    const { getByTestId } = render(<Playground />);
    const target = getByTestId("target");
    expect(target).toBeDefined();
  });

  test("contains Ball component", () => {
    const { getByTestId } = render(<Playground />);
    const ball = getByTestId("ball");
    expect(ball).toBeDefined();
  });
});
