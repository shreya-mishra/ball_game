import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { generatePositions } from "../helpers/getRandomPosition";
import { getNewPosition } from "../helpers/moveBallFunc";
import {
  INITIAL_Ball_Position,
  INITIAL_TARGET_POSITION,
} from "../constants/playgroundComponents";

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
// @ts-expect-error : context was expecting initial value
const Position = createContext();

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
    <Position.Provider value={{ targetPosition, position, setPosition }}>
      {children}
    </Position.Provider>
  );
};

export const usePositionContext = () => useContext(Position);
