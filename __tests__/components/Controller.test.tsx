import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Controllers from "../../src/components/Controller";
import { moveBallFunc } from "../../src/helpers/moveBallFunc";

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
});
