import { StyleSheet, View } from "react-native";
import React from "react";
import Target from "./Target";
import Circle from "./Circle";

export type ballPositionType = { id: number; top: number; left: number };
type GamePlayGroundType = {
  border: boolean;
};
const GamePlayground = ({ border }: GamePlayGroundType) => {
  return (
    <View
      testID="gamePlayground"
      style={[styles.gameContainer, { borderWidth: border ? 4 : 1 }]}
    >
      <Target />
      <Circle />
    </View>
  );
};

export default GamePlayground;

const styles = StyleSheet.create({
  gameContainer: {
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "grey",
    position: "relative",
    margin: 10,
    width: "90%",
  },
});
