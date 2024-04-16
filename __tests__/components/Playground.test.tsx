import React from "react";
import { render } from "@testing-library/react-native";
import Playground from "../../src/components/Playground";
import { PositionProvider } from "../../src/context/positionContext";

describe("Playground Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });
  it("renders the Target component when item.target is true", () => {
    const item = { id: 1, target: true, ball: false, controller: false };
    const { getByTestId } = render(<Playground item={item} />);

    expect(getByTestId("target")).toBeDefined();
  });

  it("renders the Ball component when item.ball is true", () => {
    const item = { id: 1, target: false, ball: true, controller: false };
    const { getByTestId } = render(<Playground item={item} />, {
      wrapper: PositionProvider,
    });

    expect(getByTestId("ball")).toBeDefined();
  });

  it("renders the Controllers component when item.controller is true", () => {
    const item = { id: 1, target: false, ball: false, controller: true };
    const { getByTestId } = render(<Playground item={item} />, {
      wrapper: PositionProvider,
    });

    expect(getByTestId("controllers")).toBeDefined();
  });
});
