import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OpacityButton } from "@/components/OpacityButton";
import { styles } from "@/styles/feedStyles";
import { FeedCard } from "@/components/FeedCard";
import BottomNavigationBar from "@/components/BottomNavigationBar";
import { CustomIcon } from "@/components/CustomIcons";
import { useRouter } from "expo-router";
import { getPosts } from "@/components/backend/getPosts";

interface Post {
  id: string;
  content: string;
  likes: number;
  image_url: string | null;
  created_at: string;
  owner: {
    id: string;
    full_name: string;
    image_url: string | null;
  };
  comments_count: number;
}

export default function FeedsScreen() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getPosts(skip);
        setPosts(postsData || []);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [skip]);

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
          {posts.map((post) => (
            <FeedCard
              key={post.id}
              accountName={post.owner.full_name}
              time={new Date(post.created_at).toLocaleString()}
              content={post.content}
              likes={post.likes?.toString() || "0"}
              comments={post.comments_count.toString()}
              image={
                "https://hcdlifspwvasfwpnoujj.supabase.co/storage/v1/object/public/post-images/" +
                post.image_url
              }
            />
          ))}
        </View>
        <View style={{ height: 54 }} />
      </ScrollView>
      <BottomNavigationBar />
    </SafeAreaView>
  );
}
