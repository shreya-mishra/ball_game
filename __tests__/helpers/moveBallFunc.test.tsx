import { maxHeight, width } from "../../src/constants/playgroundComponents";
import { STEP_SIZE, targetSize } from "../../src/helpers/calc";
import { getNewPosition } from "../../src/helpers/moveBallFunc";

describe("getNewPosition", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });
  it("should move left correctly", () => {
    const item = { id: 1, top: 20, left: 100 };
    const newPosition = getNewPosition(item, "left");
    expect(newPosition.left).toBe(Math.max(0, item.left - STEP_SIZE));
    expect(newPosition.top).toBe(20);
  });

  it("should move right correctly", () => {
    const item = { id: 1, top: 20, left: 100 };
    const newPosition = getNewPosition(item, "right");
    expect(newPosition.left).toBe(
      Math.min(width - targetSize, item.left + STEP_SIZE)
    );
    expect(newPosition.top).toBe(20);
  });

  it("should move up correctly", () => {
    const item = { id: 1, top: 20, left: 100 };
    const newPosition = getNewPosition(item, "top");
    expect(newPosition.top).toBe(Math.max(0, item.top - STEP_SIZE));
    expect(newPosition.left).toBe(100);
  });

  it("should move down correctly", () => {
    const item = { id: 1, top: 20, left: 100 };
    const newPosition = getNewPosition(item, "bottom");
    expect(newPosition.top).toBe(
      Math.min(maxHeight - targetSize, item.top + STEP_SIZE)
    );
    expect(newPosition.left).toBe(100);
  });

  it("should handle invalid position correctly", () => {
    const item = { id: 1, top: 20, left: 100 };
    const newPosition = getNewPosition(item, "invalid");
    expect(newPosition).toEqual(item);
  });

  it("should handle left boundary", () => {
    const item = { id: 1, top: 20, left: 0 };
    const newPosition = getNewPosition(item, "left");
    expect(newPosition.left).toBe(0);
    expect(newPosition.top).toBe(20);
  });

  it("should handle right boundary", () => {
    const item = { id: 1, top: 20, left: width - targetSize };
    const newPosition = getNewPosition(item, "right");
    expect(newPosition.left).toBe(width - targetSize);
    expect(newPosition.top).toBe(20);
  });

  it("should handle top boundary", () => {
    const item = { id: 1, top: 0, left: 100 };
    const newPosition = getNewPosition(item, "top");
    expect(newPosition.top).toBe(0);
    expect(newPosition.left).toBe(100);
  });

  it("should handle bottom boundary", () => {
    const item = { id: 1, top: maxHeight - targetSize, left: 100 };
    const newPosition = getNewPosition(item, "bottom");
    expect(newPosition.top).toBe(maxHeight - targetSize);
    expect(newPosition.left).toBe(100);
  });
});
