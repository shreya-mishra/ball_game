import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";
import { ballPositionType } from "../constants/types";
import { useBallPositionContext } from "../context/ballPositionContext";
import { ballSize } from "../helpers/calc";

const Ball = () => {
  const { position } = useBallPositionContext() as {
    position: { top: number; left: number }[];
  };
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
