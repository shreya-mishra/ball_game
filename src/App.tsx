import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import GamePlayground from "./components/GamePlayground";

const { width, height } = Dimensions.get("window");
const targetSize = 50; // Assuming the target box size is 50x50
const playgroundSize = 300; // Assuming the playground size

export default function App() {
  const [initialBallsPosition, setInitialBallPosition] = useState({
    id: 1,
    top: 0,
    left: 0,
  });

  const moveBallToParticularPos = (position: string) => {
    let { top, left } = initialBallsPosition;
    const step = 10; // Move step size

    switch (position) {
      case "left":
        left = Math.max(left - step, 0);
        break;
      case "right":
        left = Math.min(left + step, playgroundSize - targetSize);
        break;
      case "top":
        top = Math.max(top - step, 0);
        break;
      case "bottom":
        top = Math.min(top + step, playgroundSize - targetSize);
        break;
      default:
        return;
    }

    setInitialBallPosition((prev) => ({
      ...prev,
      top,
      left,
    }));
  };

  // TODO:
  // useEffect(() => {
  //   const newX = Math.floor(Math.random() * playgroundSize);
  //   const newY = Math.floor(Math.random() * playgroundSize);

  //   const ballPosition = {
  //     id: 1,
  //     top: newX,
  //     left: newY,
  //   };
  //   setInitialBallPosition(ballPosition);
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <GamePlayground
          targetShow
          controllerHide={true}
          border={true}
          bgColor={"white"}
          ballColor={"green"}
          ballPosition={initialBallsPosition}
          moveBallToParticularPos={(position: string) =>
            moveBallToParticularPos(position)
          }
        />
        <GamePlayground
          moveBallToParticularPos={(position: string) =>
            moveBallToParticularPos(position)
          }
          bgColor={"white"}
          border={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 8,
  },
});
