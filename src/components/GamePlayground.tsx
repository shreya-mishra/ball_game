import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Target from "./Target";
import Circle from "./Circle";

const { height, width } = Dimensions.get("window");

export type ballPositionType = { id: number; top: number; left: number };
type GamePlayGroundType = {
  border: boolean;
};
const GamePlayground = ({ border }: GamePlayGroundType) => {
  return (
    <View
      style={[
        styles.gameContainer,
        {
          backgroundColor: bgColor,
          height: height * 0.23,
          width: 300,
          borderWidth: border ? 4 : 0,
        },
      ]}
    >
      <Target
        targetPositionFromLeft={200}
        targetPositionFromTop={10}
        ballPosition={ballPosition}
      />

      {ballPosition && (
        <Circle ballPosition={ballPosition} ballColor={ballColor} />
      )}
    </View>
  );
};

export default GamePlayground;

const styles = StyleSheet.create({
  gameContainer: {
    // alignItems: "center",
    // justifyContent: "center",
    // borderWidth: 4,
    borderColor: "grey",
    // margin: 2,
    position: "relative",
  },
});
