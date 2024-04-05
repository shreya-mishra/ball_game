import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Playground from "./src/components/Playground";

export default function App() {
  return (
    <SafeAreaView style={styles.container} testID="container">
      <View>
        <Playground />
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
