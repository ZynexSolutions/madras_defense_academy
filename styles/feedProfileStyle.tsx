import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F9FF",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 22,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  backIcon: {
    marginRight: 16,
  },
  profilePicContainer: {
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  profession: {
    fontSize: 16,
    fontWeight: "bold",
    color: "darkgray",
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    width: "100%",
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
  },
  statLabel: {
    fontWeight: "bold",
    fontSize: 14,
    color: "darkgray",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    width: "100%",
    paddingHorizontal: 14,
    gap: 14,
  },
  followButton: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#0961F5",
  },
  followButtonText: {
    color: "#0961F5",
    fontSize: 16,
    fontWeight: "500",
  },
  messageButton: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#146EF2",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 999,
  },
  messageButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 14,
  },
});
