import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Playground from "./components/Playground";
import Controllers from "./components/Controller";
import { contentInPlayground } from "./constants/playgroundComponents";
import { INITIAL_Ball_Position, STEP_SIZE } from "./helpers/moveBallFunc";
import { calcHeight, targetSize } from "./helpers/calc";
import { ballPositionType } from "./constants/types";

export default function App() {
  const [position, setPosition] = useState<ballPositionType[]>(
    INITIAL_Ball_Position
  );

  const moveBallToPosition = (d: string, item: ballPositionType) => {
    console.log("🚀 ~ moveBallToPosition ~ d:", d);
    let { top, left } = item;
    let playgroundSize = calcHeight;

    switch (d) {
      case "left":
        left = Math.max(left - STEP_SIZE, 0);
        break;
      case "right":
        left = Math.min(left + STEP_SIZE, playgroundSize - targetSize);
        break;
      case "top":
        top = Math.max(top - STEP_SIZE, 0);
        break;
      case "bottom":
        top = Math.min(top + STEP_SIZE, playgroundSize - targetSize);
        break;
      default:
        break;
    }
    return { ...item, top, left };
  };
  const moveBallFunc = (direction: string) => {
    // TODO: move circle towards the direction

    setPosition((prev: any) => {
      const updatedPositions = prev.map((item: ballPositionType) => {
        if (item?.id) {
          return moveBallToPosition(direction, item);
        }
        return item;
      });
      console.log(
        "🚀 ~ updatedPositions ~ updatedPositions:",
        updatedPositions
      );
      return updatedPositions;
    });
  };
  return (
    <SafeAreaView style={styles.container} testID="container">
      <View>
        {contentInPlayground.map((item, index) => (
          <Playground
            key={index}
            item={item}
            moveBallFunc={(position: string) => moveBallFunc(position)}
            ballPosition={position[0]}
          />
        ))}
        <Controllers
          moveBallFunc={(position: string) => moveBallFunc(position)}
          // ballPosition={position}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
