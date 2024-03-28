import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

export type BallPositionType = {
  id: number;
  top: number;
  left: number;
};
type GamePlayGroundProps = {
  moveBallToParticularPos: (position: string) => void;
  ballPosition: BallPositionType;
};
const Playground = ({
  ballPosition,
  moveBallToParticularPos,
}: GamePlayGroundProps) => {
  const { height } = Dimensions.get("window");

  return (
    <View
      style={[
        styles.gameContainer,
        {
          height: height * 0.23,
          borderWidth: 4,
        },
      ]}
    />
  );
};

export default Playground;

const styles = StyleSheet.create({
  gameContainer: {
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "grey",
    margin: 2,
    position: "relative",
    backgroundColor: "white",
  },
});
