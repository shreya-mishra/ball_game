import { createContext, useState } from "react";
import { INITIAL_Ball_Position, STEP_SIZE } from "../helpers/moveBallFunc";
import { calcHeight, targetSize } from "../helpers/calc";

export const BallPosition = createContext(INITIAL_Ball_Position);

export const PositionProvider = ({ children }: any) => {
  const [position, setPosition] = useState(INITIAL_Ball_Position);
  const moveBallFunc = (direction: string) => {
    // TODO: move circle towards the direction
    let { top, left } = INITIAL_Ball_Position[0];
    let playgroundSize = calcHeight;

    switch (direction) {
      case "left":
        left = Math.max(left - STEP_SIZE, 0);
        break;
      case "right":
        left = Math.min(left + STEP_SIZE, playgroundSize - targetSize);

        break;
      case "top":
        top = Math.max(top - STEP_SIZE, 0);
        break;
      case "bottom":
        top = Math.min(top + STEP_SIZE, playgroundSize - targetSize);
        break;
      default:
        return;
    }
    setPosition((prev) => ({
      ...prev,
      top,
      left,
    }));
  };
  return (
    <BallPosition.Provider value={{ position, moveBallFunc }}>
      {children}
    </BallPosition.Provider>
  );
};
