import { ReactNode, createContext, useContext, useState } from "react";
import { INITIAL_Ball_Position, getNewPosition } from "../helpers/moveBallFunc";
import { positionType } from "../constants/types";

export const moveBallFunc = (
  direction: string,
  setPosition: (prev: (prevState: positionType[]) => positionType[]) => void
) => {
  setPosition((prev) => {
    const updatedPositions = prev.map((item) => {
      return getNewPosition(item, direction);
    });
    return updatedPositions;
  });
};
// @ts-expect-error as context was expecting initialization
const BallPosition = createContext();

export const PositionProvider = ({ children }: { children: ReactNode }) => {
  const [position, setPosition] = useState<positionType[]>(
    INITIAL_Ball_Position
  );

  return (
    <BallPosition.Provider value={{ position, setPosition }}>
      {children}
    </BallPosition.Provider>
  );
};

export const useBallPositionContext = () => useContext(BallPosition);
