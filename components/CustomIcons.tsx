import React, { useState, useEffect } from "react";
import { Image, ImageProps } from "expo-image";
import {
  ColorValue,
  DimensionValue,
  ImageStyle,
  StyleProp,
} from "react-native";
import { IconMap, IconNameKeyType } from "./utils/IconLists";

interface CustomIconProps extends ImageProps {
  name: IconNameKeyType;
  size: DimensionValue;
  style?: StyleProp<ImageStyle>;
  color?: ColorValue;
}

export function CustomIcon({
  name,
  size,
  style,
  color,
  ...rest
}: CustomIconProps) {
  return (
    <Image
      source={IconMap[name]}
      style={[{ width: size, height: size, tintColor: color }, style]}
      {...rest}
    />
  );
}
