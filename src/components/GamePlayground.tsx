import { StyleSheet, View } from "react-native";
import React from "react";

export type ballPositionType = { id: number; top: number; left: number };
type GamePlayGroundType = {
  border: boolean;
  bgColor: string;
  ballColor: string;
  ballPosition: ballPositionType;
};
const GamePlayground = ({
  border,
  bgColor,
  ballColor,
  ballPosition,
}: GamePlayGroundType) => {
  return (
    <View style={[styles.gameContainer, { borderWidth: border ? 4 : 0 }]}>
      <Target />
      <Circle ballPosition={ballPosition} ballColor={ballColor} />
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
