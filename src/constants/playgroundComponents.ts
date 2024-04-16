import { Dimensions } from "react-native";

export const contentInPlayground = [
  {
    id: 1,
    ball: true,
    controller: false,
    target: true,
  },
];
export const width = Dimensions.get("screen").width;
export const height = Dimensions.get("screen").height;
export const maxHeight = height * 0.34; // (targetSize - (playground + playground margin)/100)
export const INITIAL_Ball_Position = [{ id: 1, top: 100, left: 20 }];
export const INITIAL_TARGET_POSITION = { top: 0, left: 0 };
