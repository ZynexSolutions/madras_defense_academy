import React, { useState, useEffect } from "react";
import { Image, ImageProps } from "expo-image";
import { Asset } from "expo-asset";
import { StyleSheet } from "react-native";

interface CustomIconProps extends ImageProps {
  name: "book" | "home" | "profile-circle" | "task-square" | "video-square";
  size: number;
  style?: any;
}

export function CustomIcon({ name, size, style, ...rest }: CustomIconProps) {
  const [imageSource, setImageSource] = useState<string | null>(null);

  useEffect(() => {
    const loadDynamicImage = async () => {
      try {
        const imagePath = `../assets/icons/${name}.svg`;
        const asset = Asset.fromModule(require(imagePath));
        await asset.downloadAsync();
        setImageSource(asset.uri);
      } catch (error) {
        console.error("Error loading image:", error);
        // Handle error, e.g., set a placeholder image
        // setImageSource(require('../assets/icons/placeholder.png').default);
      }
    };

    loadDynamicImage();
  }, [name]);

  if (!imageSource) {
    return null; // Or a placeholder if needed
  }

  return (
    <Image
      source={{ uri: imageSource }}
      style={[{ width: size, height: size }, style]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    // width: 24,
    // height: 24,
  },
});
