import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Playground from "./components/Playground";
import Controllers from "./components/Controller";
import { contentInPlayground } from "./constants/playgroundComponents";
import { PositionProvider } from "./context/ballPositionContext";

export default function App() {
  return (
    <PositionProvider>
      <SafeAreaView style={styles.container} testID="container">
        {contentInPlayground.map((item, index) => (
          <Playground key={index} item={item} />
        ))}
        <Controllers />
      </SafeAreaView>
    </PositionProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
