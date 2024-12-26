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
import { CustomIcon } from "@/components/CustomIcons";

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
        <Text style={styles.title}>Madras Defence Academy</Text>
        <View style={styles.headerActions}>
          <OpacityButton>
            <CustomIcon name="search" size={24} color="black" />
          </OpacityButton>
          <OpacityButton>
            <CustomIcon name="plus-rounded-square" size={24} color="black" />
          </OpacityButton>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {cardData.map((card, index) => (
            <FeedCard key={index} {...card} />
          ))}
        </View>
        <View style={{ height: 54 }} />
      </ScrollView>
      <BottomNavigationBar />
    </SafeAreaView>
  );
}
