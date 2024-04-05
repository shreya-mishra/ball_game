import { STEP_SIZE } from "./calc";
import { height, width } from "../constants/playgroundComponents";

export const getNewPosition = (
  item: { left: number; top: number },
  position: string
) => {
  let { left, top } = item;
  switch (position) {
    case "left":
      left = Math.max(0, item.left - STEP_SIZE);
      break;
    case "right":
      left = Math.min(width - 40, item.left + STEP_SIZE);
      break;
    case "top":
      top = Math.max(0, item.top - STEP_SIZE);
      break;
    case "bottom":
      top = Math.min(height - 40, item.top + STEP_SIZE);
      break;
    default:
      break;
  }
  return { ...item, left, top };
};