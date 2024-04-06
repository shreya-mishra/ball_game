import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import {
  handleLongPress,
  handlePressDown,
  usePositionContext,
} from "../context/positionContext";
import { BallPositionContext } from "../constants/types";

const Controllers = () => {
  const interval: React.MutableRefObject<number | null> = useRef<number | null>(
    null
  );
  const { setPosition } = usePositionContext() as BallPositionContext;
  // TODO: Animation on ball move
  return (
    <View style={styles.container} testID="controllers">
      {/* Top Control */}
      <View
        style={{ flexDirection: "column", justifyContent: "space-between" }}
      >
        <TouchableOpacity
          testID="top-control"
          style={styles.topControl}
          onLongPress={() => handleLongPress("top", setPosition, interval)}
          onPressOut={() => handlePressDown(interval)}
        >
          <Text style={styles.control}>⬆️</Text>
        </TouchableOpacity>
      </View>
      {/* Left Control */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          testID="left-control"
          style={styles.leftControl}
          onLongPress={() => handleLongPress("left", setPosition, interval)}
          onPressOut={() => handlePressDown(interval)}
        >
          <Text style={styles.control}>⬅️</Text>
        </TouchableOpacity>
        {/* Bottom Control */}
        <View style={{ height: 35, width: 35 }} />
        {/* Right Control */}
        <TouchableOpacity
          testID="right-control"
          style={styles.rightControl}
          onLongPress={() => handleLongPress("right", setPosition, interval)}
          onPressOut={() => handlePressDown(interval)}
        >
          <Text style={styles.control}>➡️</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        testID="bottom-control"
        style={styles.bottomControl}
        onLongPress={() => handleLongPress("bottom", setPosition, interval)}
        onPressOut={() => handlePressDown(interval)}
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
