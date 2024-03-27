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

  return (
    <SafeAreaView style={styles.container}>
      <View testID="container">
        <GamePlayground
          border={true}
          bgColor={"white"}
          ballColor={"green"}
          ballPosition={initialBallsPosition}
          {...{
            testID: "gamePlayground", // this is only for testing purposes
          }}
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
