import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  ImageSourcePropType,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { OpacityButton } from "@/components/OpacityButton";
import Placeholder from "@/components/Placeholder";
import { styles } from "@/styles/feedStyles";
import { FeedCard } from "@/components/FeedCard";
import BottomNavigationBar from "@/components/BottomNavigationBar";

export default function FeedsScreen() {
  const cardData = [
    {
      accountName: "Account Name",
      time: "1 hour ago",
      content: "Lorem Ipsum Dorea Islop",
      likes: "95",
      comments: "25",
      image: require("../../assets/images/home/course.png"),
    },
    {
      accountName: "Account Name",
      time: "1 hour ago",
      content: "Lorem Ipsum Dorea Islop",
      likes: "95",
      comments: "25",
      image: require("../../assets/images/home/course.png"),
    },
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>MadrasDefenceAcademy</Text>
        <View style={styles.headerActions}>
          <OpacityButton>
            <Ionicons name="search" size={24} color="black" />
          </OpacityButton>
          <OpacityButton>
            <Ionicons name="add-circle-outline" size={24} color="black" />
          </OpacityButton>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          {cardData.map((card, index) => (
            <FeedCard key={index} {...card} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
