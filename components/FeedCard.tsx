import { View, Text } from "react-native";
import { ImageSourcePropType } from "react-native";
import { styles } from "@/styles/feedStyles";
import Placeholder from "./Placeholder";
import { OpacityButton } from "./OpacityButton";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";

interface FeedCardProps {
  accountName: string;
  time: string;
  content: string;
  likes: string;
  comments: string;
  image?: ImageSourcePropType; // Can be a string URL or a require statement
}
export const FeedCard = ({
  accountName,
  time,
  content,
  likes,
  comments,
  image,
}: FeedCardProps) => (
  <View style={styles.card}>
    <View style={styles.header}>
      <View style={styles.accountInfo}>
        <Placeholder
          width={36}
          height={36}
          borderRadius={18}
          style={styles.profileImage}
        />
        <View style={styles.nameTime}>
          <Text style={styles.accountName}>{accountName}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <OpacityButton>
          <Text style={styles.followButton}>Follow</Text>
        </OpacityButton>
        <OpacityButton>
          <Ionicons name="ellipsis-vertical" size={20} />
        </OpacityButton>
      </View>
    </View>
    <Text style={styles.content}>{content}</Text>
    <Image source={image} style={styles.postImage} />
    <View style={styles.footer}>
      <View style={styles.interaction}>
        <OpacityButton>
          <Ionicons name="heart-outline" size={24} />
        </OpacityButton>
        <Text style={styles.likes}>{likes}</Text>
      </View>
      <View style={styles.interaction}>
        <OpacityButton>
          <Ionicons name="chatbubble-outline" size={24} />
        </OpacityButton>
        <Text style={styles.comments}>{comments}</Text>
      </View>
      <View style={styles.secondaryActions}>
        <OpacityButton>
          <Ionicons name="bookmark-outline" size={24} />
        </OpacityButton>
        <OpacityButton>
          <Ionicons name="share-social-outline" size={24} />
        </OpacityButton>
      </View>
    </View>
  </View>
);
