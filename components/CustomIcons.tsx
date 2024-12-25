import React, { useState, useEffect } from "react";
import { Image, ImageProps } from "expo-image";
import { ImageStyle, StyleProp, StyleSheet } from "react-native";
import { IconMap, IconNameKeyType } from "./utils/IconLists";

interface CustomIconProps extends ImageProps {
  name: IconNameKeyType;
  size: number;
  style?: StyleProp<ImageStyle>;
}

export function CustomIcon({ name, size, style, ...rest }: CustomIconProps) {
  return (
    <Image
      source={IconMap[name]}
      style={[{ width: size, height: size }, style]}
      {...rest}
    />
  );
}
