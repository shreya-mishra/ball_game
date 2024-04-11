import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";
import { targetSize } from "../helpers/calc";

const Target = () => {
  return <View testID="target" style={styles.target} />;
};

export default Target;

const styles = StyleSheet.create({
  target: {
    position: "absolute",
    top: 0,
    left: 0,
    height: targetSize,
    width: targetSize,
    borderColor: COLORS.tertiary,
    borderStyle: "dashed",
    margin: 4,
    borderWidth: 2,
  },
});
