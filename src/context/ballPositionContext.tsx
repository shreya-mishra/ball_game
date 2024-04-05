import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  INITIAL_Ball_Position,
  INITIAL_TARGET_POSITION,
  getNewPosition,
} from "../helpers/moveBallFunc";
import { generatePositions } from "../helpers/getRandomPosition";
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
export const BallPosition = createContext();

export const PositionProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const { newBallPositions, newTargetPosition } = generatePositions();
    setPosition(newBallPositions);
    setTargetPosition(newTargetPosition);
  }, []);
  const [position, setPosition] = useState<{ top: number; left: number }[]>(
    INITIAL_Ball_Position
  );
  const [targetPosition, setTargetPosition] = useState(INITIAL_TARGET_POSITION);

  return (
    <BallPosition.Provider value={{ targetPosition, position, setPosition }}>
      {children}
    </BallPosition.Provider>
  );
};

export const useBallPositionContext = () => useContext(BallPosition);
