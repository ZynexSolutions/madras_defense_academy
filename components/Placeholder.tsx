import React from "react";
import { View, StyleSheet } from "react-native";

interface PlaceholderProps {
  width: number;
  height: number;
  borderRadius: number;
}

function Placeholder({ width, height, borderRadius }: PlaceholderProps) {
  return <View style={[styles.container, { width, height, borderRadius }]} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#efefef", // Light gray placeholder color
  },
});

export default Placeholder;
