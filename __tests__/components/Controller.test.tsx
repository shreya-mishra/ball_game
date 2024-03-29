import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Controllers from "../../src/components/Controller";

describe("Controllers Component", () => {
  test("renders all control buttons", () => {
    const { getByTestId } = render(<Controllers />);
    const controllersContainer = getByTestId("controllers");

    expect(controllersContainer).toBeDefined();

    const topControl = getByTestId("top-control");
    expect(topControl).toBeDefined();

    const bottomControl = getByTestId("bottom-control");
    expect(bottomControl).toBeDefined();

    const leftControl = getByTestId("left-control");
    expect(leftControl).toBeDefined();

    const rightControl = getByTestId("right-control");
    expect(rightControl).toBeDefined();
  });

  test("moveCircle function is called with correct direction when control buttons are pressed", () => {
    const { getByTestId } = render(<Controllers />);
    const topControl = getByTestId("top-control");
    const bottomControl = getByTestId("bottom-control");
    const leftControl = getByTestId("left-control");
    const rightControl = getByTestId("right-control");

    fireEvent.press(topControl);
    fireEvent.press(bottomControl);
    fireEvent.press(leftControl);
    fireEvent.press(rightControl);

    // Assert directly on the moveCircle function defined within the component
    const moveCircleMock = jest.spyOn(Controllers.prototype, "moveCircle");
    expect(moveCircleMock).toHaveBeenCalledTimes(4); // Ensure moveCircle is called 4 times

    expect(moveCircleMock.mock.calls[0][0]).toBe("top");
    expect(moveCircleMock.mock.calls[1][0]).toBe("bottom");
    expect(moveCircleMock.mock.calls[2][0]).toBe("left");
    expect(moveCircleMock.mock.calls[3][0]).toBe("right");
  });
});
