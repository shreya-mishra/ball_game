import React from "react";
import { render } from "@testing-library/react-native";
import { contentInPlayground } from "../src/constants/playgroundComponents";
import App from "../src/App";
import Playground from "../src/components/Playground";
import { PositionProvider } from "../src/context/ballPositionContext";

describe("App Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders the correct number of Playground components", () => {
    const { getAllByTestId } = render(<App />, {
      wrapper: PositionProvider,
    });
    const playgroundComponents = getAllByTestId("playground");
    expect(playgroundComponents.length).toEqual(contentInPlayground.length);
  });

  it("renders the Controllers component", () => {
    const { getByTestId } = render(<App />, {
      wrapper: PositionProvider,
    });
    const controllersComponent = getByTestId("controllers");
    expect(controllersComponent).toBeTruthy();
  });
});
