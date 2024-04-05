import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useEffect } from "react";
import { COLORS } from "../constants/colors";
import { ballPositionType } from "../constants/types";
import { usePositionContext } from "../context/positionContext";
import { ballSize, targetSize } from "../helpers/calc";
import { exactlyOverlapped, isOverlap } from "../helpers/getRandomPosition";

const Ball = () => {
  const { position, targetPosition } = usePositionContext() as {
    position: { top: number; left: number }[];
    targetPosition: { top: number; left: number };
  };

  useEffect(() => {
    if (exactlyOverlapped(position[0], targetPosition)) {
      Alert.alert("YEAAYYYYY You win!");
    }
  }, [position]);
  return (
    <View
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
