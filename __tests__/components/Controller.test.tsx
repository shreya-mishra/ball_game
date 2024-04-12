import React from "react";
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from "@testing-library/react-native";
import Controllers from "../../src/components/Controller";
import {
  BallPosition,
  PositionProvider,
  moveBallFunc,
  useBallPositionContext,
} from "../../src/context/ballPositionContext";
import App from "../../src/App";

// Mocking the context
// jest.mock("../../src/context/ballPositionContext");

describe("Controllers component", () => {
  it("renders all control buttons", async () => {
    const { getByTestId, getByText } = render(<App />, {
      wrapper: PositionProvider,
    });
    expect(getByText("Top control")).toBeDefined();
    expect(getByTestId("left-control")).toBeDefined();
    expect(getByTestId("right-control")).toBeDefined();
    expect(getByTestId("bottom-control")).toBeDefined();
  });

  it.only("calls setPosition with correct direction when top control button is pressed", () => {
    const mockFunc = jest.fn();
    jest.mock("../../src/context/ballPositionContext", () => {
      return {
        useBallPositionContext: jest.fn(() => {
          const position = { left: 10, top: 10 };
          const setPosition = mockFunc;

          const moveBallFunc = jest.fn(() => {
            return {
              // Mocking the moveBallFunc function
              moveBallFunc: jest.fn(() => {
                // You can provide a custom implementation or leave it empty for a default mock
                return "Mocked moveBallFunc";
              }),
            };
          });

          // Return an object with the mocked values
          return {
            position,
            setPosition,
            moveBallFunc,
          };
        }),
        PositionProvider: jest.fn(({ children }) => children), // Mocking PositionProvider
      };
    });
    render(<Controllers />, {
      wrapper: PositionProvider,
    });
    expect(mockFunc).toHaveBeenCalledWith("top");
    // const { moveBallFunc } = useBallPositionContext();
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
