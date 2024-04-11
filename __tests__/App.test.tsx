import React from "react";
import { render } from "@testing-library/react-native";
import { contentInPlayground } from "../src/constants/playgroundComponents";
import App from "../src/App";
import Playground from "../src/components/Playground";

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders the correct number of Playground components", () => {
    const { getAllByTestId } = render(<App />);
    const playgroundComponents = getAllByTestId("playground");
    expect(playgroundComponents.length).toEqual(contentInPlayground.length);
  });

  it("renders the Controllers component", () => {
    const { getByTestId } = render(<App />);
    const controllersComponent = getByTestId("controllers");
    expect(controllersComponent).toBeTruthy();
  });
});
