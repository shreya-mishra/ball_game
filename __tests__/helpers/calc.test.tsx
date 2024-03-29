import { NUM_PLAYGROUND_CONTAINERS, calcHeight } from "../../src/helpers/calc";

describe("calcHeight function", () => {
  it("calculates height correctly", () => {
    const expectedHeight = `${100 / NUM_PLAYGROUND_CONTAINERS}%`;
    expect(calcHeight).toEqual(expectedHeight);
  });
});
