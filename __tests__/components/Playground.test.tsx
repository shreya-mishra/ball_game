import React from "react";
import { render } from "@testing-library/react-native";
import Playground from "../../src/components/Playground";
import { contentInPlayground } from "../../src/constants/playgroundComponents";

describe("Playground component", () => {
  const item = contentInPlayground[0];
  // console.log("🚀 ~ describe ~ item:", contentInPlayground[0]);

  // it("renders correctly", () => {
  //   const item = contentInPlayground[0];
  //   const prop = {
  //     ...item,
  //   };
  //   const { getByTestId } = render(<Playground item={prop} />);
  //   const playground = getByTestId("playground");

  //   expect(playground.props).toHaveProperty([item]);
  // });

  it("contains Target component", () => {
    const { getByTestId } = render(<Playground item={item} />);
    const target = getByTestId("target");
    expect(target).toBeDefined();
  });

  test("contains Ball component", () => {
    const { getByTestId } = render(<Playground item={item} />);
    const ball = getByTestId("ball");
    expect(ball).toBeDefined();
  });
});
