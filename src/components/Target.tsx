import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";

const Target = () => {
  return <View testID="target" style={styles.target} />;
};

export default Target;

const styles = StyleSheet.create({
  target: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 50,
    width: 50,
    borderColor: COLORS.tertiary,
    borderStyle: "dashed",
    margin: 4,
    borderWidth: 2,
  },
});
