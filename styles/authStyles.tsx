import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F9FF",
  },
  topSection: {
    flex: 0.45,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {},
  bottomSection: {
    flex: 0.55,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    marginTop: 32,
    textAlign: "center",
  },
  authButtonsContainer: {
    width: "100%",
    flexDirection: "column",
    gap: 16,
    marginBottom: 10,
  },
  authButton: {
    backgroundColor: "white",
    borderRadius: 999,
    padding: 16,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },
  googleIcon: {
    height: 24,
    width: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    backgroundColor: "white",
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
  },
  orText: {
    fontSize: 16,
    color: "gray",
    padding: 20,
    marginBottom: 5,
  },
  signInButton: {
    backgroundColor: "#146EF2",
    borderRadius: 999,
    padding: 16,
    width: "100%",
  },
  signInButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginRight: 10,
  },
  SignInButtonNextIconContainer: {
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
  SignInButtonNextIcon: {
    color: "#146EF2",
    // position: "absolute",
    // right: 10,
    // top: "50%",
    // transform: [{ translateY: -12 }],
  },
  signUpContainer: {
    marginTop: 20,
  },
  signUpText: {
    fontSize: 14,
  },
  signUpLink: {
    fontWeight: "bold",
    color: "#146EF2",
  },
});

export default styles;
