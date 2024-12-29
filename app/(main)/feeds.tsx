import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OpacityButton } from "@/components/OpacityButton";
import { styles } from "@/styles/feedStyles";
import { FeedCard } from "@/components/FeedCard";
import BottomNavigationBar from "@/components/BottomNavigationBar";
import { CustomIcon } from "@/components/CustomIcons";
import { useRouter } from "expo-router";
import { supabase } from "@/components/backend/supabase";

export default function FeedsScreen() {
  const router = useRouter();

  const cardData = [
    {
      accountName: "Account Name",
      time: "1 hour ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo vel mauris ac convallis. Pellentesque venenatis malesuada eros id accumsan. Sed vel mattis lorem, non facilisis sapien. Integer fringilla condimentum elit in luctus. Nunc auctor massa non tellus vestibulum tincidunt. Suspendisse ultrices quam egestas, lobortis ligula non, euismod magna. Nunc a risus ante. Aenean tincidunt, tortor et pellentesque accumsan, nibh",
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

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from("posts").select(`
          auth.users (
            raw_user_meta_data
          )
        `);
      if (error) {
        console.log(error);
      }
      console.log("here is the data: ", data);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Madras Defence Academy</Text>
        <View style={styles.headerActions}>
          <OpacityButton>
            <CustomIcon name="search" size={24} color="black" />
          </OpacityButton>
          <OpacityButton
            onPress={() => {
              router.push("/(main)/makePost");
            }}
          >
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
