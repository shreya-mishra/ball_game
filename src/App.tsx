import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import GamePlayground from "./components/GamePlayground";

export default function App() {
  const [initialBallsPosition, setInitialBallPosition] = useState({
    id: 1,
    top: 0,
    left: 0,
  });

  return (
    <View style={styles.container} testID="container">
      <GamePlayground
        border={true}
        {...{
          testID: "gamePlayground", // this is only for testing purposes
        }}
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
