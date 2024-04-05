import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";
import { targetSize } from "../helpers/calc";
import { INITIAL_TARGET_POSITION } from "../helpers/moveBallFunc";
import { useBallPositionContext } from "../context/ballPositionContext";

const Target = () => {
  const { targetPosition } = useBallPositionContext() as {
    position: { top: number; left: number }[];
    targetPosition: { top: number; left: number };
  };
  return (
    <View testID="target" style={[styles.target, { ...targetPosition }]} />
  );
};

export default Target;

const styles = StyleSheet.create({
  target: {
    position: "absolute",
    height: targetSize,
    width: targetSize,
    borderColor: COLORS.tertiary,
    borderStyle: "dashed",
    margin: 4,
    borderWidth: 2,
  },
});
