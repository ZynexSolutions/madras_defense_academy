import React, { useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "@/styles/BottomNavigationBarStyles"; // Import your stylesheet
import { useRouter, usePathname } from "expo-router";

import { Feather } from "@expo/vector-icons";
import { CustomIcon } from "./CustomIcons";
import { IconNameKeyType } from "./utils/IconLists";

const BottomNavigationBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  interface TabType {
    name: string;
    icon: IconNameKeyType;
    route: string;
  }

  const tabs: TabType[] = [
    { name: "Home", icon: "home", route: "/(main)/" },
    { name: "Course", icon: "book", route: "/course" },
    { name: "Feeds", icon: "video-square", route: "/feeds" },
    { name: "Tests", icon: "task-square", route: "/tests" },
    { name: "Profile", icon: "profile-circle", route: "/(main)/profile" },
  ];

  useEffect(() => {
    console.log("pathname : " + pathname);
  }, [pathname]);

  const handlePress = (route: any) => {
    router.replace(route);
  };

  return (
    <View style={styles.bottomTab}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tabButton}
          onPress={() => handlePress(tab.route)}
        >
          <CustomIcon
            name={tab.icon}
            size={24}
            style={{
              tintColor:
                pathname === tab.route.replace("/(main)", "")
                  ? "#146EF2"
                  : "gray",
              marginBottom: 2,
            }}
          />
          <Text
            style={[
              styles.tabText,
              { color: pathname === tab.route ? "#146EF2" : "gray" },
            ]}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNavigationBar;
