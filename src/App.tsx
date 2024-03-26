import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Playground from "./components/Playground";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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
