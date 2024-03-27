import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Target from "./Target";
import Circle from "./Circle";

const { height, width } = Dimensions.get("window");

export type ballPositionType = { id: number; top: number; left: number };
type GamePlayGroundType = {
  border: boolean;
  bgColor: string;
  ballColor: string;
  ballPosition: {
    id: number;
    top: number;
    left: number;
  };
};
const GamePlayground = ({
  border,
  bgColor,
  ballColor,
  ballPosition,
}: GamePlayGroundType) => {
  return (
    <View
      testID="gamePlayground"
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
        targetPositionFromLeft={0}
        targetPositionFromTop={0}
        ballPosition={ballPosition}
      />

      {ballPosition && (
        <Circle
          ballPosition={ballPosition}
          ballColor={ballColor}
          {...{
            testID: "ball",
          }}
        />
      )}
    </View>
  );
};

export default GamePlayground;

const styles = StyleSheet.create({
  gameContainer: {
    borderColor: "grey",
    position: "relative",
  },
});
