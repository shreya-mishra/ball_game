import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useEffect } from "react";
import { COLORS } from "../constants/colors";
import { ballPositionType } from "../constants/types";
import { useBallPositionContext } from "../context/ballPositionContext";
import { ballSize, targetSize } from "../helpers/calc";
import { isOverlap } from "../helpers/getRandomPosition";

const Ball = () => {
  const { position, targetPosition } = useBallPositionContext() as {
    position: { top: number; left: number }[];
    targetPosition: { top: number; left: number };
  };

  useEffect(() => {
    if (isOverlap(position[0], targetPosition)) {
      Alert.alert("YEAAYYYYY You win!");
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
