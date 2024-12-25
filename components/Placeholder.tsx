import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface PlaceholderProps {
  width: number;
  height: number;
  borderRadius: number;
  style?: StyleProp<ViewStyle>;
}

function Placeholder({ width, height, borderRadius, style }: PlaceholderProps) {
  return (
    <View style={[styles.container, { width, height, borderRadius }, style]} />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#efefef", // Light gray placeholder color
  },
});

export default Placeholder;
