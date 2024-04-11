import React from "react";
import { render } from "@testing-library/react-native";
import Playground from "../../src/components/Playground";
import { contentInPlayground } from "../../src/constants/playgroundComponents";

describe("Playground component", () => {
  const item = contentInPlayground[0];
  it("contains Target component", () => {
    const { getByTestId } = render(<Playground item={item} />);
    const target = getByTestId("target");
    expect(target).toBeDefined();
  });

  test("contains Ball component", () => {
    const { getByTestId } = render(<Playground item={item} />);
    const ball = getByTestId("ball");
    expect(ball).toBeDefined();
  });
});
