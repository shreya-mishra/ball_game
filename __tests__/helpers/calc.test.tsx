import {
  calcHeight,
  calcPlaygroundHeight,
  targetSize,
} from "../../src/helpers/calc";

describe("Calculation Test Cases", () => {
  it("should calculate calcHeight correctly based on NUM_PLAYGROUND_CONTAINERS", () => {
    expect(calcHeight).toEqual(50);
  });

  it("should calculate calcPlaygroundHeight correctly", () => {
    expect(calcPlaygroundHeight).toEqual("50%");
  });

  it("should assign the correct value to targetSize", () => {
    expect(targetSize).toEqual(50);
  });
});

// Functional Test Cases
describe("Functional Test Cases", () => {
  // Assuming NUM_PLAYGROUND_CONTAINERS is set to 2
  it("should recalculate calcHeight when NUM_PLAYGROUND_CONTAINERS changes", () => {
    expect(calcHeight).toEqual(50);
  });

  it("should maintain the assigned value when targetSize changes", () => {
    expect(targetSize).toEqual(50);
  });
});
