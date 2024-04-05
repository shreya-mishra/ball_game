import { StyleSheet, View, ViewProps } from "react-native";
import React from "react";
import { calcHeight } from "../helpers/calc";
import Target from "./Target";
import Ball from "./Ball";

const Playground = () => {
  return (
    <View testID={"playground"} style={styles.gameContainer}>
      <Target />
      <Ball />
    </View>
  );
};

export default Playground;

const styles = StyleSheet.create({
  gameContainer: {
    height: calcHeight,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "grey",
    margin: 12,
    position: "relative",
    borderWidth: 2,
  },
});
