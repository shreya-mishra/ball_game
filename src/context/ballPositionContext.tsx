import { ReactNode, createContext, useContext, useState } from "react";
import { INITIAL_Ball_Position, getNewPosition } from "../helpers/moveBallFunc";

export const moveBallFunc = (
  direction: string,
  setPosition: (
    prev: (
      prevState: { top: number; left: number }[]
    ) => { top: number; left: number }[]
  ) => void
) => {
  setPosition((prev) => {
    const updatedPositions = prev.map((item) => {
      return getNewPosition(item, direction);
    });
    return updatedPositions;
  });
};
// @ts-expect-error
const BallPosition = createContext();

export const PositionProvider = ({ children }: { children: ReactNode }) => {
  const [position, setPosition] = useState<{ top: number; left: number }[]>(
    INITIAL_Ball_Position
  );

  return (
    <BallPosition.Provider value={{ position, setPosition }}>
      {children}
    </BallPosition.Provider>
  );
};

export const useBallPositionContext = () => useContext(BallPosition);
