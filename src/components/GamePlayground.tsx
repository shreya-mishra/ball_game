import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Target from "./Target";
import Circle from "./Circle";

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
    <View style={styles.gameContainer}>
      {/* target
      ball (random position) */}
      <Target
        targetPositionFromLeft={100}
        targetPositionFromTop={50}
        ballPosition={ballPosition}
      />
      <View>
        {/* <Controllers
          key={statusOfButton}
          statusOfButton={statusOfButton}
          disabledGoalButton={disabledGoalButton}
          moveCircle={moveBallToParticularPos}
        /> */}
      </View>
      {ballPosition && (
        <Circle ballPosition={ballPosition} ballColor={ballColor} />
      )}
    </View>
  );
};

export default GamePlayground;

const styles = StyleSheet.create({
  gameContainer: {
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 4,
    borderColor: "grey",
    margin: 2,
    position: "relative",
  },
});
