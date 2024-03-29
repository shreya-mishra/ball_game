import { render } from "@testing-library/react-native";
import App from "../src/App";
import Playground from "../src/components/Playground";

describe("App components", () => {
  it("renders container correctly", () => {
    const { getByTestId } = render(<App />);
    const container = getByTestId("container");
    expect(container).toBeTruthy();
  });
  it("renders playground correctly", () => {
    const { getByTestId } = render(<Playground />);
    const playground = getByTestId("playground");
    expect(playground).toBeTruthy();
  });
});
