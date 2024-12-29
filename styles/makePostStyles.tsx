import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F9FF",
    paddingHorizontal: 16,
  },
  topBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginVertical: 20,
  },
  postButton: {
    backgroundColor: "#146EF2",
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  postButtonText: {
    color: "white",
  },
  contentContainer: {
    flex: 1,
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
  },
  selectedImage: {
    width: width - 32,
    height: width - 32,
    aspectRatio: 1,
    resizeMode: "cover",
    marginTop: 10,
  },
  bottomBar: {
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  imageButton: {
    padding: 12,
  },
});

export default styles;
