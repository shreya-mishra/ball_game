import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import Target from "./Target";
import Circle from "./Circle";
import Controllers from "./Controllers";

const { height, width } = Dimensions.get("window");

export type ballPositionType = { id: number; top: number; left: number };
type GamePlayGroundType = {
  border: boolean;
  bgColor: string;
  ballColor: string;
  ballPosition: ballPositionType;
  moveBallToParticularPos: (pos: string) => void;
};
const GamePlayground = ({
  border,
  bgColor,
  ballColor,
  ballPosition,
  moveBallToParticularPos,
}: GamePlayGroundType) => {
  const { height, width } = Dimensions.get("window");
  const [statusOfButton, setStatusOfButton] = useState("");
  let interval = useRef<any>(null);

  // useEffect(() => {
  //   calculatePositionOfParticularBallWhetherReachButton();
  // }, [ballPosition]);
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
      <View
        style={{
          position: "absolute",
          bottom: 60,
        }}
      >
        <Controllers
          disabledGoalButton={false}
          key={statusOfButton}
          statusOfButton={statusOfButton}
          moveCircle={moveBallToParticularPos}
        />
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
