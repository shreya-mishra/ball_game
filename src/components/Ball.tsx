import { View, StyleSheet, Alert } from "react-native";
import React, { useEffect } from "react";
import { COLORS } from "../constants/colors";
import { usePositionContext } from "../context/positionContext";
import { ballSize, targetSize } from "../helpers/calc";
import { exactlyOverlapped } from "../helpers/getRandomPosition";

const Ball = ({ id }: { id: number }) => {
  const { position, targetPosition } = usePositionContext() as {
    position: { top: number; left: number }[];
    targetPosition: { top: number; left: number };
  };
  console.log({ position, targetPosition });
  useEffect(() => {
    if (
      position[id - 1] &&
      exactlyOverlapped(position[id - 1], targetPosition)
    ) {
      Alert.alert("YEAAYYYYY You win!");
    }
  }, [position]);
  return (
    <View
      style={{
        position: "absolute",
        top: position[id - 1].top,
        left: position[id - 1].left,
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
    zIndex: 1,
    backgroundColor: COLORS.secondary,
  },
});
