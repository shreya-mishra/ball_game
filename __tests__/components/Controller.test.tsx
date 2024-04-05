import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Controllers from "../../src/components/Controller";
import {
  BallPosition,
  PositionProvider,
  useBallPositionContext,
} from "../../src/context/ballPositionContext";

// Mocking the context
jest.mock("../../src/context/ballPositionContext");

describe("Controllers component", () => {
  it("renders all control buttons", () => {
    const { getByTestId } = render(<Controllers />);

    expect(getByTestId("top-control")).toBeDefined();
    expect(getByTestId("left-control")).toBeDefined();
    expect(getByTestId("right-control")).toBeDefined();
    expect(getByTestId("bottom-control")).toBeDefined();
  });

  it.only("calls setPosition with correct direction when top control button is pressed", () => {
    const setPosition = jest.fn();
    const position = { left: 10, top: 10 };
    useBallPositionContext.mockReturnValue({ position, setPosition });
    const { getByTestId } = render(<Controllers />);

    fireEvent.press(getByTestId("top-control"));
    expect(setPosition).toHaveBeenCalledTimes(1);

    expect(setPosition).toHaveBeenCalledWith("top");
  });

  it("calls setPosition with correct direction when left control button is pressed", () => {
    const setPosition = jest.fn();
    const { getByTestId } = render(
      <PositionProvider>
        <Controllers />
      </PositionProvider>
    );

    fireEvent.press(getByTestId("left-control"));

    expect(setPosition).toHaveBeenCalledWith("left");
  });

  it("calls setPosition with correct direction when right control button is pressed", () => {
    const setPosition = jest.fn();
    const { getByTestId } = render(
      <BallPositionContext.Provider value={{ setPosition }}>
        <Controllers />
      </BallPositionContext.Provider>
    );

    fireEvent.press(getByTestId("right-control"));

    expect(setPosition).toHaveBeenCalledWith("right");
  });

  it("calls setPosition with correct direction when bottom control button is pressed", () => {
    const setPosition = jest.fn();
    const { getByTestId } = render(
      <BallPositionContext.Provider value={{ setPosition }}>
        <Controllers />
      </BallPositionContext.Provider>
    );

    fireEvent.press(getByTestId("bottom-control"));

    expect(setPosition).toHaveBeenCalledWith("bottom");
  });
});
