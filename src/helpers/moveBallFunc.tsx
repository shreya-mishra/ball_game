// import { useContext, useState } from "react";
// import { calcHeight, targetSize } from "./calc";

export const INITIAL_Ball_Position = [{ id: 1, top: 20, left: 100 }];
export const STEP_SIZE = 10;

export const getNewPosition = (item: any, position: string) => {
  console.log("🚀 ~ App ~ item:", { item });
  let { left, top } = item;
  // if (item.id === playgroundBallId) {
  switch (position) {
    case "left":
      left = Math.max(0, item.left - 10);
      break;
    case "right":
      left = Math.min(calcHeight - 40, item.left + 10);
      break;
    case "top":
      top = Math.max(0, item.top - 40);
      break;
    case "bottom":
      top = Math.min(calcHeight - 40, item.top + 40);
      break;

    // TODO: Shreya - Add other cases
    default:
      break;
  }

  return { ...item, left, top };
};
