import React from "react";
import { render } from "@testing-library/react-native";
import Ball from "../../src/components/Ball";
import { PositionProvider } from "../../src/context/positionContext";
import { Alert } from "react-native";

jest.spyOn(Alert, "alert").mockImplementation(jest.fn());
jest.mock("../../src/helpers/getRandomPosition", () => ({
  exactlyOverlapped: jest.fn().mockReturnValue(true),
}));
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
  test.only("ball is exactly overlapped to target", () => {
    const alert = jest.fn();
    jest.spyOn(Alert, "alert").mockImplementation(alert);
    render(<Ball />, {
      wrapper: PositionProvider,
    });
    expect(alert).toHaveBeenCalledWith("YEAAYYYYY You win!");
  });
});
