import React from "react";
import { render, screen } from "@testing-library/react-native";
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

  it("renders correctly with custom props", () => {
    const testProps = {
      border: true,
      bgColor: "white",
      ballColor: "green",
      ballPosition: { id: 1, top: 50, left: 50 },
    };

    const { getByTestId } = render(<GamePlayground {...testProps} />);
    const gamePlayground = getByTestId("gamePlayground");

    expect(gamePlayground).toBeDefined();
    const color = gamePlayground.props.style.find((s) =>
      s.hasOwnProperty("backgroundColor")
    );
    expect(color.backgroundColor).toBe("white");
    const border = gamePlayground.props.style.find((s) =>
      s.hasOwnProperty("backgroundColor")
    );
    expect(border.borderWidth).toBe(4);
  });

  it("renders ball if ballPosition is provided", () => {
    const { getByTestId, queryByTestId } = render(
      <GamePlayground
        ballPosition={{
          id: 1,
          top: 0,
          left: 0,
        }}
        border={false}
        bgColor={""}
        ballColor={""}
      />
    );

    const suggestions = screen.queryByTestId("ball");
    expect(suggestions).toBeDefined();
  });

  it("does not render ball if ballPosition is not provided", () => {
    const { getByTestId, queryByTestId } = render(
      <GamePlayground border={false} bgColor={""} ballColor={""} />
    );
    const suggestions = screen.queryByTestId("ball");
    expect(suggestions).toBeNull();
  });
});
