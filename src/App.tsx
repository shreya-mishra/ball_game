import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Playground from "./components/Playground";
import Controllers from "./components/Controller";
import { contentInPlayground } from "./constants/playgroundComponents";
import { PositionProvider } from "./context/positionContext";

export default function App() {
  return (
    <PositionProvider>
      <SafeAreaView style={styles.container} testID="container">
        <View>
          {contentInPlayground.map((item, index) => (
            <Playground key={index} item={item} />
          ))}
          <Controllers id={contentInPlayground.length + 1} />
        </View>
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
