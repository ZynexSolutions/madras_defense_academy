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
    backgroundColor: "#F5F9FF",
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
    paddingTop: 10,
  },
  card: {
    // width: cardWidth,
    width: "100%",
    backgroundColor: "white",
    // borderRadius: 10,
    // marginBottom: 16,
    // padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    padding: 10,
    marginTop: 12,
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
    marginBottom: 12,
    textAlign: "left",
  },
  postImage: {
    width: width,
    height: width,
    // borderRadius: 10,
    marginBottom: 12,
    aspectRatio: 1,
    resizeMode: "cover",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
