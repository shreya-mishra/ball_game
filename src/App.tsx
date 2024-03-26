import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import GamePlayground from "./components/GamePlayground";

export default function App() {
  const [initialBallsPosition, setInitialBallPosition] = useState({
    id: 1,
    top: 0,
    left: 0,
  });

  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <GamePlayground
        border={true}
        bgColor={"white"}
        ballColor={"green"}
        ballPosition={initialBallsPosition}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
