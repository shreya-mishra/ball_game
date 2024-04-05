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
