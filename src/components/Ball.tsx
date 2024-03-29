import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";

const Ball = () => {
  return <View testID="ball" style={styles.ball} />;
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
