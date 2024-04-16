// Context.test.tsx

import { moveBallFunc } from "../../src/context/ballPositionContext";
import { getNewPosition } from "../../src/helpers/moveBallFunc";

// Mock setPosition function
const mockSetPosition = jest.fn();

// Define position type
type positionType = { left: number; top: number };

describe("moveBallFunc", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear all mocks before each test
  });

  it("should call setPosition with updated positions", () => {
    // Mock previous positions
    const prevPositions: positionType[] = [
      { left: 0, top: 0 },
      { left: 1, top: 1 },
    ];

    // Call moveBallFunc with a direction
    moveBallFunc("left", mockSetPosition);

    // Ensure setPosition was called once
    expect(mockSetPosition).toHaveBeenCalledTimes(1);

    // Check if setPosition was called with the correct updated positions
    expect(mockSetPosition).toHaveBeenCalledWith(expect.any(Function));

    let actualResult = [];
    actualResult.push(getNewPosition(prevPositions[0], "left"));
    actualResult.push(getNewPosition(prevPositions[1], "left"));

    // Get the callback function passed to setPosition
    const setPositionCallback = mockSetPosition.mock.calls[0][0];

    // Call the callback function with previous positions to get updated positions
    const updatedPositions = setPositionCallback(prevPositions);

    // Check if updatedPositions are as expected based on the mocked getNewPosition function
    expect(updatedPositions).toEqual(actualResult);

    // Optionally, you can also check if getNewPosition was called with the correct arguments
    // expect(getNewPosition).toHaveBeenCalledTimes(2); // Called twice for two positions
    // expect(getNewPosition).toHaveBeenCalledWith(prevPositions[0], "left");
    // expect(getNewPosition).toHaveBeenCalledWith(prevPositions[1], "left");
  });
});
