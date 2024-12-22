import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.skipButton}
        // onPress={() => navigation.navigate("Home")} // Replace "Home" with your desired screen
      >
        <ThemedText style={styles.skipText}>Skip</ThemedText>
      </TouchableOpacity>

      <View style={styles.content}>
        <Image
          source={require("@/assets/images/react-logo.png")} // Replace with your local image path or URL
          style={styles.image}
          resizeMode="contain"
        />
        <ThemedText style={styles.title}>Online Learning</ThemedText>
        <ThemedText style={styles.subtitle}>
          We Provide Online Classes and Pre-Recorded Lectures.
        </ThemedText>
      </View>

      <View style={styles.footer}>
        <View style={styles.indicatorContainer}>
          <View style={[styles.indicator, styles.activeIndicator]} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => console.log("Next button pressed")}
        >
          <ThemedText style={styles.nextText}>→</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFF",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  skipButton: {
    alignSelf: "flex-end",
    marginRight: 10,
  },
  skipText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B6B6B",
    fontWeight: "semibold",
    textAlign: "center",
    marginTop: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  indicatorContainer: {
    flexDirection: "row",
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#C4C4C4",
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: "#007AFF",
  },
  nextButton: {
    width: 50,
    height: 50,
    backgroundColor: "#007AFF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  nextText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default OnboardingScreen;
