import { StyleSheet, View, ViewProps } from "react-native";
import React from "react";
import { calcHeight, calcPlaygroundHeight } from "../helpers/calc";
import Target from "./Target";
import Ball from "./Ball";
import Controllers from "./Controller";
import { ballPositionType, contentInPlaygroundType } from "../constants/types";

const Playground = ({
  item,
  moveBallFunc,
  ballPosition,
}: {
  item: contentInPlaygroundType;
  moveBallFunc: (pos: string) => void;
  ballPosition: ballPositionType;
}) => {
  console.log("🚀 ~ ballPosition:", ballPosition);
  const { id, target, ball, controller } = item;
  return (
    <View testID={"playground"} style={styles.gameContainer}>
      {target && <Target />}
      {ball && <Ball ballPosition={ballPosition} />}
      {controller && <Controllers moveBallFunc={moveBallFunc} />}
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
