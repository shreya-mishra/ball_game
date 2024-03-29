import { useContext, useState } from "react";
import { calcHeight, targetSize } from "./calc";

export const INITIAL_Ball_Position = [{ id: 1, top: 0, left: 0 }];
export const STEP_SIZE = 10;

export const moveBallFunc = (direction: string) => {
  // TODO: move circle towards the direction
  let { top, left } = INITIAL_Ball_Position[0];
  let playgroundSize = calcHeight;
  console.log("🚀 ~ moveBallFunc ~ playgroundSize:", {
    playgroundSize,
    targetSize,
  });

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
  //TODO:set position
  // setBallPosition((prev) => ({
  //   ...prev,
  //   top,
  //   left,
  // }));
};
