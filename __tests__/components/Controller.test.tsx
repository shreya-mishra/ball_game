import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import * as contextModule from "../../src/context/positionContext";
import Controllers from "../../src/components/Controller";
import { PositionProvider } from "../../src/context/positionContext";

jest.spyOn(contextModule, "moveBallFunc").mockImplementation(jest.fn());

describe("Controllers Component", () => {
  const renderComponent = () =>
    render(<Controllers />, { wrapper: PositionProvider });

  it("should call moveBallFunc with 'top' direction when top control is pressed", () => {
    const { getByTestId } = renderComponent();
    const topControl = getByTestId("top-control");
    fireEvent.press(topControl);
    expect(contextModule.moveBallFunc).toHaveBeenCalledWith(
      "top",
      expect.any(Function)
    );
  });

  it("should call moveBallFunc with 'left' direction when left control is pressed", () => {
    const { getByTestId } = renderComponent();
    const leftControl = getByTestId("left-control");

    fireEvent.press(leftControl);

    expect(contextModule.moveBallFunc).toHaveBeenCalledWith(
      "left",
      expect.any(Function)
    );
  });

  it("should call moveBallFunc with 'right' direction when right control is pressed", () => {
    const { getByTestId } = renderComponent();
    const rightControl = getByTestId("right-control");

    fireEvent.press(rightControl);

    expect(contextModule.moveBallFunc).toHaveBeenCalledWith(
      "right",
      expect.any(Function)
    );
  });

  it("should call moveBallFunc with 'bottom' direction when bottom control is pressed", () => {
    const { getByTestId } = renderComponent();
    const bottomControl = getByTestId("bottom-control");

    fireEvent.press(bottomControl);

    expect(contextModule.moveBallFunc).toHaveBeenCalledWith(
      "bottom",
      expect.any(Function)
    );
  });
});
