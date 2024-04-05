import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import GamePlayground from "./src/components/GamePlayground";

export default function App() {
  const [initialBallsPosition, setInitialBallPosition] = useState({
    id: 1,
    top: 0,
    left: 0,
  });

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
  },
});
