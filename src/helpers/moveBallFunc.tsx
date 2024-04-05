import { height, maxHeight, width } from "../constants/playgroundComponents";
import { STEP_SIZE, calcHeight, targetSize } from "./calc";

export const INITIAL_Ball_Position = [{ id: 1, top: 20, left: 100 }];
export const getNewPosition = (item: any, position: string) => {
  let { left, top } = item;
  switch (position) {
    case "left":
      left = Math.max(0, item.left - STEP_SIZE);
      break;
    case "right":
      left = Math.min(width - targetSize, item.left + STEP_SIZE);
      break;
    case "top":
      top = Math.max(0, item.top - STEP_SIZE);
      break;
    case "bottom":
      top = Math.min(maxHeight - targetSize, item.top + STEP_SIZE);
      break;
    default:
      break;
  }
  left = Math.max(0, Math.min(left, width - targetSize));
  top = Math.max(0, Math.min(top, height - targetSize));

  return { ...item, left, top };
};
