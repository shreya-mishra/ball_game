import { calcHeight } from "../../src/helpers/calc";
import {
  exactlyOverlapped,
  generatePositions,
  isOverlap,
} from "../../src/helpers/getRandomPosition";

describe("generatePositions", () => {
  test("generated target position should be within playground bounds", () => {
    const { newTargetPosition } = generatePositions();
    expect(newTargetPosition.top).toBeGreaterThanOrEqual(0);
    expect(newTargetPosition.left).toBeGreaterThanOrEqual(0);
    expect(newTargetPosition.top).toBeLessThanOrEqual(calcHeight);
    expect(newTargetPosition.left).toBeLessThanOrEqual(calcHeight);
  });

  test("generated ball positions should not overlap with the target position", () => {
    const { newTargetPosition, newBallPositions } = generatePositions();
    newBallPositions.forEach((ballPosition) => {
      expect(isOverlap(ballPosition, newTargetPosition)).toBe(false);
    });
  });
});

describe("isOverlap", () => {
  test("returns true when ball position overlaps with target position", () => {
    const ballPosition = { top: 10, left: 10 };
    const targetPosition = { top: 8, left: 8 };
    expect(isOverlap(ballPosition, targetPosition)).toBe(true);
  });

  test("returns false when ball position does not overlap with target position", () => {
    const ballPosition = { top: 20, left: 20 };
    const targetPosition = { top: 30, left: 30 };
    expect(isOverlap(ballPosition, targetPosition)).toBe(false);
  });
});

describe("exactlyOverlapped", () => {
  test("returns true when ball position exactly overlaps with target position", () => {
    const ballPosition = { top: 10, left: 10 };
    const targetPosition = { top: 10, left: 10 };
    expect(exactlyOverlapped(ballPosition, targetPosition)).toBe(true);
  });

  test("returns false when ball position does not exactly overlap with target position", () => {
    const ballPosition = { top: 20, left: 20 };
    const targetPosition = { top: 30, left: 30 };
    expect(exactlyOverlapped(ballPosition, targetPosition)).toBe(false);
  });
});
