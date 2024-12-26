import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { OpacityButton } from "@/components/OpacityButton";
import Placeholder from "@/components/Placeholder";
import { styles } from "@/styles/feedProfileStyle";
import BottomNavigationBar from "@/components/BottomNavigationBar";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function ProfileScreen() {
  const router = useRouter();

  function goToTheLastPage() {
    if (router.canGoBack()) {
      router.back();
    }
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          style={styles.backIcon}
          onPress={goToTheLastPage}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.profilePicContainer}>
            <Placeholder
              width={width * 0.3}
              height={width * 0.3}
              borderRadius={(width * 0.3) / 2}
            />
            {/* <Image
                source={require("@/assets/profile.png")}
                style={{
                    width: width * 0.3,
                    height: width * 0.3,
                    borderRadius: (width * 0.3) / 2
                }}
                />
            </Placeholder> */}
          </View>
          <Text style={styles.name}>Christopher J. Levine</Text>
          <Text style={styles.profession}>Professor at ABC</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>26</Text>
              <Text style={styles.statLabel}>Courses</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>15800</Text>
              <Text style={styles.statLabel}>Students</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>8750</Text>
              <Text style={styles.statLabel}>Ratings</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <OpacityButton style={styles.followButton}>
              <Text style={styles.followButtonText}>Following</Text>
            </OpacityButton>
            <OpacityButton style={styles.messageButton}>
              <Text style={styles.messageButtonText}>Message</Text>
            </OpacityButton>
          </View>
          <View style={styles.gridContainer}>
            {Array.from({ length: 11 }).map((_, i) => (
              <Placeholder
                key={i}
                width={width / 3 - 22}
                height={width / 3 - 22}
                borderRadius={10}
                style={{ margin: 3 }}
              />
            ))}
          </View>
        </View>
        <View style={{ height: 54 }} />
      </ScrollView>
      <BottomNavigationBar />
    </SafeAreaView>
  );
}
