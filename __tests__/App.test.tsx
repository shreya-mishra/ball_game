import { render } from "@testing-library/react-native";
import App from "../src/App";
import GamePlayground from "../src/components/GamePlayground";

describe("App components", () => {
  it("renders container correctly", () => {
    const { getByTestId } = render(<App />);
    const container = getByTestId("container");
    expect(container).toBeTruthy();
  });
  it("renders game playground correctly", () => {
    const { getByTestId } = render(<GamePlayground border={false} />);
    const playground = getByTestId("gamePlayground");
    expect(playground).toBeTruthy();
  });
  it("renders correctly with custom props", () => {
    const { getByTestId } = render(<GamePlayground border={true} />);
    const playground = getByTestId("gamePlayground");
    expect(playground).toBeTruthy();
    expect(playground.props.border).toEqual(undefined);
  });
});
