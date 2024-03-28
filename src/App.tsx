import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Playground from "./components/Playground";

export default function App() {
  const { width, height } = Dimensions.get("window");
  const maxHeight = height * 0.23;
  const [initialBallsPosition, setInitialBallPosition] = useState([
    {
      id: 1,
      top: 0,
      left: 0,
    },
  ]);
  const moveBallToParticularPos = (
    position: string,
    playgroundBallId: number
  ) => {
    setInitialBallPosition((prev: any) => {
      const updatedPositions = prev.map((item: any) => {
        if (item.id === playgroundBallId) {
          if (position === "left") {
            return { ...item, left: Math.max(0, item.left - 10) };
          }
          if (position === "right") {
            return { ...item, left: Math.min(width - 40, item.left + 10) };
          }
          if (position === "top") {
            return { ...item, top: Math.max(0, item.top - 40) };
          }
          if (position === "bottom") {
            return { ...item, top: Math.min(maxHeight - 40, item.top + 40) };
          }
        }
        return item;
      });
      return updatedPositions;
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Playground
          ballPosition={initialBallsPosition[0]}
          moveBallToParticularPos={(position) =>
            moveBallToParticularPos(position, initialBallsPosition[0].id)
          }
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
    padding: 8,
  },
});
