import { StyleSheet, View } from "react-native";
import React from "react";
import { calcPlaygroundHeight } from "../helpers/calc";
import Target from "./Target";
import Ball from "./Ball";
import Controllers from "./Controller";
import { contentInPlaygroundType } from "../constants/types";

const Playground = ({ item }: { item: contentInPlaygroundType }) => {
  const { id, target, ball, controller } = item;

  return (
    <View testID={"playground"} style={styles.gameContainer}>
      {target && <Target />}
      {ball && <Ball />}
      {controller && <Controllers />}
    </View>
  );
};

export default Playground;

const styles = StyleSheet.create({
  gameContainer: {
    height: calcPlaygroundHeight,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "grey",
    margin: 12,
    position: "relative",
    borderWidth: 2,
  },
});
