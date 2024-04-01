import { StyleSheet, View, ViewProps } from "react-native";
import React, { useContext } from "react";
import { calcHeight, calcPlaygroundHeight } from "../helpers/calc";
import Target from "./Target";
import Ball from "./Ball";
import Controllers from "./Controller";
import { ballPositionType, contentInPlaygroundType } from "../constants/types";
import { useBallPositionContext } from "../context/ballPositionContext";

const Playground = ({ item }: { item: contentInPlaygroundType }) => {
  const { id, target, ball, controller } = item;

  return (
    <View testID={"playground"} style={styles.gameContainer}>
      {/* {target && <Target />} */}
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
