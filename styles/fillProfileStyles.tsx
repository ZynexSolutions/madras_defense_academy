import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F9FF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  backIcon: {
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  topSection: {
    alignItems: "center",
    marginTop: 16,
  },
  profilePicContainer: {
    position: "relative",
  },
  editIconContainer: {
    position: "absolute",
    bottom: 4,
    right: 4,
    backgroundColor: "#32BD83",
    borderRadius: 999,
    height: 26,
    width: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  editIcon: {},
  bottomSection: {
    flex: 1,
    paddingHorizontal: 20,
  },
  formContainer: {
    marginTop: 32,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 999,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  icon: {
    marginRight: 10,
  },
  picker: {
    flex: 1,
    height: 52,
  },
  input: {
    flex: 1,
    height: 52,
  },
  continueButton: {
    backgroundColor: "#146EF2",
    borderRadius: 999,
    padding: 16,
    width: "100%",
    marginTop: 20,
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginRight: 10,
  },
  continueButtonNextIconContainer: {
    position: "absolute",
    right: -12,
    top: "50%",
    transform: [{ translateY: -22 }],
    borderRadius: 999,
    backgroundColor: "white",
    height: 44,
    width: 44,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  continueButtonNextIcon: {
    color: "#146EF2",
  },
});

export default styles;
