import React, { useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "@/styles/BottomNavigationBarStyles"; // Import your stylesheet
import { useRouter, usePathname } from "expo-router";

import { Feather } from "@expo/vector-icons";
import { CustomIcon } from "./CustomIcons";

const BottomNavigationBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const tabs = [
    { name: "Home", icon: "home", route: "/(main)" }, // Assuming '/' is your Home route
    { name: "Course", icon: "book", route: "/course" },
    { name: "Feeds", icon: "video-square", route: "/feeds" },
    { name: "Tests", icon: "task-square", route: "/tests" },
    { name: "Profile", icon: "profile-circle", route: "/(main)/profile" },
  ];

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  const handlePress = (route: any) => router.push(route);

  return (
    <View style={styles.bottomTab}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tabButton}
          onPress={() => handlePress(tab.route)}
        >
          {/* <Feather
            name={tab.icon as never}
            size={24}
            color={pathname === tab.route ? "#146EF2" : "gray"}
          /> */}
          <CustomIcon
            name={tab.icon as never}
            size={24}
            style={{
              overlayColor: pathname === tab.route ? "#146EF2" : "gray",
            }}
            // color={pathname === tab.route ? "#146EF2" : "gray"}
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
