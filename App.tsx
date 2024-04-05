import React from "react";
import { StyleSheet, View } from "react-native";
import GamePlayground from "./src/components/GamePlayground";

export default function App() {
  return (
    <View style={styles.container}>
      <GamePlayground border={true} />
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
