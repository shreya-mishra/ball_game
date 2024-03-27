import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ballPositionType } from "./GamePlayground";

type TargetType = {
  targetPositionFromLeft: number;
  targetPositionFromTop: number;
  ballPosition: ballPositionType;
};
const Target = ({
  targetPositionFromLeft,
  targetPositionFromTop,
  ballPosition,
}: TargetType) => {
  const [isReached, setIsReached] = useState(true);
  return (
    <View style={{ position: "relative", width: "100%", height: "100%" }}>
      <View
        style={[
          styles.container,
          {
            top: targetPositionFromTop,
            left: targetPositionFromLeft,
            backgroundColor: isReached ? "#90edef" : "",
          },
        ]}
      ></View>
    </View>
  );
};

export default Target;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 50,
    width: 50,
    borderColor: "blue",
    borderStyle: "dashed",
    margin: 4,
    borderWidth: 2,
  },
});
