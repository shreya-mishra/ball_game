import { Dimensions } from "react-native";
import { maxHeight, width } from "../constants/playgroundComponents";
import { STEP_SIZE, targetSize } from "./calc";

export const INITIAL_Ball_Position = [{ id: 1, top: 20, left: 100 }];
export const INITIAL_TARGET_POSITION = { top: 0, left: 0 };
const height = Dimensions.get("screen").height;

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
