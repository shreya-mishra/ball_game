import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Controllers = ({}) => {
  const moveCircle = (direction: string) => {
    // TODO: move circle towards the direction
  };
  return (
    <View style={styles.container} testID="controllers">
      {/* Top Control */}
      <View
        style={{ flexDirection: "column", justifyContent: "space-between" }}
      >
        <TouchableOpacity
          style={styles.topControl}
          onPress={() => moveCircle("top")}
        >
          <Text style={styles.control}>⬆️</Text>
        </TouchableOpacity>
      </View>
      {/* Left Control */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={styles.leftControl}
          onPress={() => moveCircle("left")}
        >
          <Text style={styles.control}>⬅️</Text>
        </TouchableOpacity>
        {/* Bottom Control */}
        <View style={{ height: 35, width: 35 }} />
        {/* Right Control */}
        <TouchableOpacity
          style={styles.rightControl}
          onPress={() => moveCircle("right")}
        >
          <Text style={styles.control}>➡️</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.bottomControl}
        onPress={() => moveCircle("bottom")}
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
