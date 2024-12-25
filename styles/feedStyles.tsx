import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const cardWidth = width * 0.9;

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F9FF",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerActions: {
    flexDirection: "row",
    gap: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 20,
    paddingTop: 10,
  },
  card: {
    width: cardWidth,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 16,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
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
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 12,
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
