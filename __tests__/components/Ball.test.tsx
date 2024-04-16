import React from "react";
import { render } from "@testing-library/react-native";
import Ball from "../../src/components/Ball";
import {
  BallPosition,
  PositionProvider,
} from "../../src/context/ballPositionContext";

describe("Ball component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });
  test("renders correctly", () => {
    const { getByTestId } = render(<Ball />, {
      wrapper: PositionProvider,
    });
    const ball = getByTestId("ball");
    expect(ball).toBeDefined();
  });
});
