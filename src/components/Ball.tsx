import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";
import { ballPositionType } from "../constants/types";

const Ball = ({ ballPosition }: { ballPosition: ballPositionType }) => {
  console.log("🚀 ~ Ball ~ ballPosition:", ballPosition);
  return (
    <View
      style={{
        position: "absolute",
        top: ballPosition.top,
        left: ballPosition.left,
      }}
    >
      <View testID="ball" style={styles.ball} />
    </View>
  );
};

export default Ball;

const styles = StyleSheet.create({
  ball: {
    height: 25,
    width: 25,
    borderRadius: 100,
    backgroundColor: COLORS.secondary,
  },
});
