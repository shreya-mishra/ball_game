import { width } from "../../src/constants/playgroundComponents";
import { ballSize, calcHeight, targetSize } from "../../src/helpers/calc";
import {
  exactlyOverlapped,
  generatePositions,
  isOverlap,
} from "../../src/helpers/getRandomPosition";

describe("generatePositions", () => {
  it("should return an object with newTargetPosition and newBallPositions", () => {
    const positions = generatePositions();
    expect(positions).toHaveProperty("newTargetPosition");
    expect(positions).toHaveProperty("newBallPositions");
  });

  it("newTargetPosition should be within bounds of playground", () => {
    const positions = generatePositions();
    const { newTargetPosition } = positions;
    expect(newTargetPosition.top).toBeGreaterThanOrEqual(0);
    expect(newTargetPosition.left).toBeGreaterThanOrEqual(0);
    expect(newTargetPosition.top + targetSize).toBeLessThanOrEqual(calcHeight);
    expect(newTargetPosition.left + targetSize).toBeLessThanOrEqual(width - 12);
  });

  it("newBallPositions should be within bounds of playground", () => {
    const positions = generatePositions();
    positions.newBallPositions.forEach((ball) => {
      expect(ball.top).toBeGreaterThanOrEqual(0);
      expect(ball.left).toBeGreaterThanOrEqual(0);
      expect(ball.top + ballSize).toBeLessThanOrEqual(calcHeight);
      expect(ball.left + ballSize).toBeLessThanOrEqual(width - 12);
    });
  });

  it("no overlap between newTargetPosition and newBallPositions", () => {
    const positions = generatePositions();
    const { newTargetPosition, newBallPositions } = positions;

    newBallPositions.forEach((ball) => {
      expect(isOverlap(ball, newTargetPosition)).toBe(false);
    });
  });
});

describe("isOverlap", () => {
  it("should return true for overlapping positions", () => {
    const ballPosition = { top: 50, left: 50 };
    const targetPosition = { top: 50, left: 50 };
    expect(isOverlap(ballPosition, targetPosition)).toBe(true);
  });

  it("should return false for non-overlapping positions", () => {
    const ballPosition = { top: 100, left: 100 };
    const targetPosition = { top: 50, left: 50 };
    expect(isOverlap(ballPosition, targetPosition)).toBe(false);
  });

  it("should return true for edge cases where ball touches target edges", () => {
    const ballPosition = { top: 50, left: 100 };
    const targetPosition = { top: 50, left: 100 };
    expect(isOverlap(ballPosition, targetPosition)).toBe(true);
  });
});

describe("exactlyOverlapped", () => {
  it("should return true for exactly overlapped positions", () => {
    const ballPosition = { top: 50, left: 50 };
    const targetPosition = { top: 50, left: 50 };
    expect(exactlyOverlapped(ballPosition, targetPosition)).toBe(true);
  });

  it("should return false for non-exactly overlapped positions", () => {
    const ballPosition = { top: 50, left: 50 };
    const targetPosition = { top: 51, left: 51 };
    expect(exactlyOverlapped(ballPosition, targetPosition)).toBe(false);
  });
});
