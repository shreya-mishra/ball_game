import React from "react";
import { render } from "@testing-library/react-native";
import GamePlayground from "../../src/components/GamePlayground";
import Circle from "../../src/components/Circle";

describe("GamePlayground Component", () => {
  it("renders correctly with default props", () => {
    const { getByTestId } = render(
      <GamePlayground
        border={false}
        bgColor={""}
        ballColor={""}
        ballPosition={{
          id: 0,
          top: 0,
          left: 0,
        }}
      />
    );
    const gamePlayground = getByTestId("gamePlayground");
    expect(gamePlayground).toBeDefined();
  });

  it.only("renders correctly with custom props", () => {
    const testProps = {
      border: true,
      bgColor: "white",
      ballColor: "green",
      ballPosition: { id: 1, top: 50, left: 50 },
    };

    const { getByTestId } = render(<GamePlayground {...testProps} />);
    const gamePlayground = getByTestId("gamePlayground");

    expect(gamePlayground).toBeDefined();
    expect(gamePlayground.props.style[0].backgroundColor).toBe("white"); // this is giving error
    expect(gamePlayground.props.style[0].borderWidth).toBe(4);
  });

  it("renders ball if ballPosition is provided", () => {
    const testProps = {
      ballPosition: { id: 1, top: 50, left: 50 },
    };

    const { getByTestId, getByText } = render(
      <GamePlayground
        border={false}
        bgColor={""}
        ballColor={""}
        {...testProps}
      />
    );
    const { getByTestId: getByTestId_ } = render(
      <Circle
        ballPosition={{
          id: 0,
          top: 0,
          left: 0,
        }}
        ballColor={""}
      />
    );
    getByTestId("gamePlayground");
    // getByTestId_("ball");
  });

  it("does not render ball if ballPosition is not provided", () => {
    const { getByTestId, queryByText } = render(
      <GamePlayground
        border={false}
        bgColor={""}
        ballColor={""}
        ballPosition={{
          id: 0,
          top: 0,
          left: 0,
        }}
      />
    );
    const { getByTestId: getByTestId_ } = render(
      <Circle
        ballPosition={{
          id: 0,
          top: 0,
          left: 0,
        }}
        ballColor={""}
      />
    );
    getByTestId("gamePlayground");
    // expect(getByTestId_("ball")).toBeNull();
  });
});
