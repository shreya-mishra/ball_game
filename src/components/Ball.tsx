import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { COLORS } from "../constants/colors";
import { ballPositionType } from "../constants/types";
import { useBallPositionContext } from "../context/ballPositionContext";
import { ballSize, targetSize } from "../helpers/calc";

const Ball = () => {
  const { position, targetPosition } = useBallPositionContext() as {
    position: { top: number; left: number }[];
    targetPosition: { top: number; left: number };
  };

  useEffect(() => {
    if (
      position[0].left >= targetPosition.left &&
      position[0].left + targetSize < targetPosition.left + targetSize &&
      position[0].top <= targetPosition.top &&
      position[0].top + targetSize <= targetPosition.top + targetSize
    ) {
      console.log("overlappped !!!!!!!!!!!!!!!!!");
    }
  }, [position]);
  return (
    <View
      key={Date.now()}
      style={{
        position: "absolute",
        top: position[0].top,
        left: position[0].left,
      }}
    >
      <View testID="ball" style={styles.ball} />
    </View>
  );
};

export default Ball;

const styles = StyleSheet.create({
  ball: {
    height: ballSize,
    width: ballSize,
    borderRadius: 100,
    backgroundColor: COLORS.secondary,
  },
});
