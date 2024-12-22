import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F9FF",
  },
  topSection: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {},
  bottomSection: {
    flex: 0.75,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 32,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 14,
    color: "gray",
    marginBottom: 24,
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
    marginBottom: 24,
    marginTop: 14,
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
  input: {
    flex: 1,
    height: 52,
  },
  iconRight: {
    marginLeft: 10,
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginLeft: 18,
    marginTop: 6,
  },
  rememberText: {
    marginLeft: 8,
    fontSize: 14,
  },
  checkbox: {
    marginRight: 8, // Add some spacing between checkbox and text
  },
  forgotPassword: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#146EF2",
  },
  checkboxAndText: {
    flexDirection: "row",
    alignItems: "center",
  },
  authButtonsContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
    marginBottom: 10,
    justifyContent: "center",
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
