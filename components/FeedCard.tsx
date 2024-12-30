import { View, Text, TouchableOpacity, LayoutChangeEvent } from "react-native";
import { ImageSourcePropType } from "react-native";
import { styles } from "@/styles/feedStyles";
import Placeholder from "./Placeholder";
import { OpacityButton } from "./OpacityButton";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState, useRef, useEffect } from "react";

interface FeedCardProps {
  accountName: string;
  time: string;
  content: string;
  likes: string;
  comments: string;
  image?: string;
}

export const FeedCard = ({
  accountName,
  time,
  content,
  likes,
  comments,
  image,
}: FeedCardProps) => {
  const router = useRouter();
  const [showFullContent, setShowFullContent] = useState(true);
  const [isTextTruncated, setIsTextTruncated] = useState(false);
  const textRef = useRef<Text>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.measure((x, y, width, height) => {
        if (height > 40) {
          setIsTextTruncated(true);
          setShowFullContent(false);
        }
      });
    }
  }, [content]);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.accountInfo}
          onPress={() => {
            router.push("/(profile)/feedProfile");
          }}
        >
          <Placeholder
            width={38}
            height={38}
            borderRadius={18}
            style={styles.profileImage}
          />
          <View style={styles.nameTime}>
            <Text style={styles.accountName}>{accountName}</Text>
            <Text style={styles.time}>{time}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.actions}>
          <OpacityButton>
            <Text style={styles.followButton}>Follow</Text>
          </OpacityButton>
          <OpacityButton>
            <Ionicons name="ellipsis-vertical" size={20} />
          </OpacityButton>
        </View>
      </View>
      <Text
        ref={textRef}
        style={styles.content}
        numberOfLines={showFullContent ? undefined : 2}
        ellipsizeMode="tail"
      >
        {content}
      </Text>
      {isTextTruncated && (
        <Text
          onPress={toggleContent}
          style={{ color: "#0961F5", paddingHorizontal: 10 }}
        >
          {showFullContent ? "less" : "more"}
        </Text>
      )}
      <Image source={image} style={styles.postImage} />
      <View style={styles.footer}>
        <View style={styles.footerPrimaryActions}>
          <View style={styles.interaction}>
            <OpacityButton>
              <Ionicons name="heart-outline" size={20} />
            </OpacityButton>
            <Text style={styles.likes}>{likes}</Text>
          </View>
          <View style={styles.interaction}>
            <OpacityButton>
              <Ionicons name="chatbubble-outline" size={20} />
            </OpacityButton>
            <Text style={styles.comments}>{comments}</Text>
          </View>
        </View>
        <View style={styles.secondaryActions}>
          <OpacityButton>
            <Ionicons name="bookmark-outline" size={20} />
          </OpacityButton>
          <OpacityButton>
            <Ionicons name="share-social-outline" size={20} />
          </OpacityButton>
        </View>
      </View>
    </View>
  );
};
