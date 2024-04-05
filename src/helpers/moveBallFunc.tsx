import { useContext, useState } from "react";
import { calcHeight, targetSize } from "./calc";
import { Dimensions } from "react-native";

export const INITIAL_Ball_Position = [{ id: 1, top: 100, left: 20 }];
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export const STEP_SIZE = (10 / (width - 12)) * 100;

export const getNewPosition = (
  item: { left: number; top: number },
  position: string
) => {
  let { left, top } = item;
  console.log("calc height>>>", calcHeight);
  // if (item.id === playgroundBallId) {
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
  console.log("new position >>>>>>>>>>>>>>>>>>", { ...item, left, top });
  return { ...item, left, top };
};
