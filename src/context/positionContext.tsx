import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { generatePositions } from "../helpers/getRandomPosition";
import { getNewPosition } from "../helpers/moveBallFunc";
import { INITIAL_TARGET_POSITION } from "../helpers/moveBallFunc";
import { Timeout, positionType } from "../constants/types";
import { INITIAL_Ball_Position } from "../constants/playgroundComponents";

export const handlePressDown = (interval: { current: any }) => {
  clearInterval(interval.current);
};
export const handleLongPress = (
  direction: string,
  setPosition: (prev: (prevState: positionType[]) => positionType[]) => void,
  interval: React.MutableRefObject<number | Timeout | null>,
  id: number
) => {
  interval.current = setInterval(() => {
    moveBallFunc(direction, setPosition, id);
  }, 1000);
};
export const moveBallFunc = (
  direction: string,
  setPosition: (prev: (prevState: positionType[]) => positionType[]) => void,
  id: number
) => {
  setPosition((prev) => {
    const updatedPositions = prev.map((item) => {
      if (item.id === id - 1) {
        return getNewPosition(item, direction);
      }
      return item;
    });
    // console.log("🚀 ~ updatedPositions ~ updatedPositions:", updatedPositions);
    return updatedPositions;
  });
};
// @ts-expect-error : context was expecting initial value
const Position = createContext();

export const PositionProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const { newBallPositions, newTargetPosition } = generatePositions();
    // setPosition(newBallPositions);
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
