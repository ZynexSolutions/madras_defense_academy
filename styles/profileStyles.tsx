import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F9FF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  backIcon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 24,
  },
  imageContainer: {
    position: "relative",
  },
  editImageIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 18,
  },
  info: {
    marginTop: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
    color: "gray",
  },
  menu: {
    flex: 1,
    paddingHorizontal: 18,
    backgroundColor: "#fff",
    marginHorizontal: 22,
    borderRadius: 14,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E6E6",
    justifyContent: "space-between",
  },
  menuItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 10,
  },
  menuItemValueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemValue: {
    marginRight: 6,
    color: "gray",
  },
});

export default styles;
