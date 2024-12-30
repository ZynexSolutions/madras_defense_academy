import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import { useColorScheme } from "react-native";
import { StatusBar, View, ActivityIndicator } from "react-native";
import { createContext, useEffect, useState, useCallback } from "react";
import { supabase } from "@/components/backend/supabase";
import { User } from "@supabase/supabase-js";

type UserContextType = {
  userData: User | null;
  refreshUserData: () => Promise<void>;
};

export const UserContext = createContext<UserContextType | null>(null);

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const refreshUserData = useCallback(async () => {
    const user = await supabase.auth.getUser();
    setUserData(user.data.user);
  }, []);

  useEffect(() => {
    (async () => {
      await refreshUserData();
      setLoading(false);
    })();
  }, [refreshUserData]);

  useEffect(() => {
    if (!loading) {
      if (userData) {
        if (userData.user_metadata?.phone_number) {
          router.replace("/(main)");
        } else {
          router.replace("/(auth)/fillProfile");
        }
      } else {
        router.replace("/(auth)");
      }
    }
  }, [userData, loading, router]);

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN") {
      refreshUserData();
    } else if (event === "SIGNED_OUT") {
      refreshUserData();
    }
  });

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <UserContext.Provider value={{ userData, refreshUserData }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(auth)/index" />
          <Stack.Screen name="(main)/index" />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar barStyle={"default"} />
      </ThemeProvider>
    </UserContext.Provider>
  );
}
