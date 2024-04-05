import { StyleSheet, View } from "react-native";
import React from "react";
import Target from "./Target";
import Ball from "./Ball";

type GamePlayGroundType = {
  border: boolean;
};
const GamePlayground = ({ border }: GamePlayGroundType) => {
  return (
    <View style={[styles.gameContainer, { borderWidth: border ? 4 : 0 }]}>
      <Target />
      <Ball />
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
