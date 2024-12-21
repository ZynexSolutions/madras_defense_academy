import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
// import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import AuthScreen from "./(auth)";

import { StatusBar } from "react-native";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Ensure this line is commented out */}
        {/* <Stack.Screen name="(auth)/index" /> */}

        {/* Ensure this line is active */}
        <Stack.Screen name="(auth)/fillProfile" />

        {/* <Stack.Screen name="(tabs)" /> */}
        <Stack.Screen name="+not-found" />
      </Stack>
      {/* <StatusBar barStyle={"default"} /> */}
    </ThemeProvider>
  );
}
