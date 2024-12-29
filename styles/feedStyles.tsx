import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const cardWidth = width * 0.9;

export const styles = StyleSheet.create({
  FeedPageContainer: {
    flex: 1,
    height: "100%",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 22,
    // backgroundColor: "red",
  },
  title: {
    color: "#0961F5",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerActions: {
    flexDirection: "row",
    gap: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 20,
    paddingTop: 0, // Removed padding at the top of the container
    gap: 10,
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    marginTop: 0, // Removed margin at the top of the card
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginBottom: 12,
    padding: 10,
    marginTop: 0, // Removed margin at the top of the header
  },
  accountInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    marginRight: 10,
  },
  nameTime: {
    flexDirection: "column",
  },
  accountName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  time: {
    fontSize: 12,
    color: "gray",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  followButton: {
    color: "#146EF2",
    fontWeight: "bold",
    fontSize: 14,
  },
  content: {
    fontSize: 14,
    // marginBottom: 12,
    textAlign: "left",
    paddingHorizontal: 10, // Added padding to align with the image
  },
  postImage: {
    width: width, // Full width
    height: width, // Height equals width for 1:1 aspect ratio
    marginVertical: 12, // Added more space between the image and the buttons
    aspectRatio: 1, // Ensures the image maintains a 1:1 aspect ratio
    resizeMode: "cover", // Ensures the image covers the area without distortion
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10, // Added padding to align with the image
    paddingBottom: 10, // Added padding at the bottom
  },
  interaction: {
    flexDirection: "row",
    alignItems: "center",
  },
  secondaryActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  likes: {
    marginLeft: 5,
  },
  comments: {
    marginLeft: 5,
  },
});
