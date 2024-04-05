import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { moveBallFunc, usePositionContext } from "../context/positionContext";
import { BallPositionContext } from "../constants/types";

const Controllers = () => {
  const { setPosition } = usePositionContext() as BallPositionContext;

  return (
    <View style={styles.container} testID="controllers">
      {/* Top Control */}
      <View
        style={{ flexDirection: "column", justifyContent: "space-between" }}
      >
        <TouchableOpacity
          testID="top-control"
          style={styles.topControl}
          onPress={() => moveBallFunc("top", setPosition)}
        >
          <Text style={styles.control}>⬆️</Text>
        </TouchableOpacity>
      </View>
      {/* Left Control */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          testID="left-control"
          style={styles.leftControl}
          onPress={() => moveBallFunc("left", setPosition)}
        >
          <Text style={styles.control}>⬅️</Text>
        </TouchableOpacity>
        {/* Bottom Control */}
        <View style={{ height: 35, width: 35 }} />
        {/* Right Control */}
        <TouchableOpacity
          testID="right-control"
          style={styles.rightControl}
          onPress={() => moveBallFunc("right", setPosition)}
        >
          <Text style={styles.control}>➡️</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        testID="bottom-control"
        style={styles.bottomControl}
        onPress={() => moveBallFunc("bottom", setPosition)}
      >
        <Text style={styles.control}>⬇️</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Controllers;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  bottomControl: {
    borderWidth: 2,
    borderColor: "black",
    height: 35,
    width: 35,
    borderRadius: 4,
    alignItems: "center",
    backgroundColor: "#CECDCE",
  },
  rightControl: {
    borderWidth: 2,
    borderColor: "black",
    height: 35,
    width: 35,
    borderRadius: 4,
    alignItems: "center",
    backgroundColor: "#CECDCE",
  },
  leftControl: {
    borderWidth: 2,
    borderColor: "black",
    height: 35,
    width: 35,
    borderRadius: 4,
    alignItems: "center",
    backgroundColor: "#CECDCE",
  },
  topControl: {
    borderWidth: 2,
    borderColor: "black",
    height: 35,
    width: 35,
    borderRadius: 4,
    alignItems: "center",
    backgroundColor: "#CECDCE",
  },
  control: {
    marginTop: 5,
  },
});
