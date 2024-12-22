import Placeholder from "@/components/Placeholder";
import { View, Text, Dimensions } from "react-native";
import { OpacityButton } from "@/components/OpacityButton";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "@/styles/authStyles";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const AuthScreen = () => {
  const router = useRouter();

  function redirectToSignIn() {
    router.push("/(auth)/signin");
  }

  function redirectToSignUp() {
    router.push("/(auth)/signup");
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topSection}>
        <View style={styles.logoContainer}>
          <Placeholder
            width={width * 0.35}
            height={width * 0.35}
            borderRadius={(width * 0.35) / 2}
          />
        </View>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.title}>Let's you in</Text>
        <View style={styles.authButtonsContainer}>
          <OpacityButton
            onPress={() => console.log("Continue with Google")}
            style={styles.authButton}
          >
            <View style={styles.buttonContent}>
              <Ionicons name="logo-google" size={24} />
              <Text style={styles.buttonText}>Continue with Google</Text>
            </View>
          </OpacityButton>
          <OpacityButton
            onPress={() => console.log("Continue with Apple")}
            style={styles.authButton}
          >
            <View style={styles.buttonContent}>
              <Ionicons name="logo-apple" size={24} />
              <Text style={styles.buttonText}>Continue with Apple</Text>
            </View>
          </OpacityButton>
        </View>

        <Text style={styles.orText}>( Or )</Text>

        <OpacityButton onPress={redirectToSignIn} style={styles.signInButton}>
          <View style={styles.buttonContent}>
            <Text style={styles.signInButtonText}>
              Sign In with Your Account
            </Text>
            <View style={styles.SignInButtonNextIconContainer}>
              <Ionicons
                name="arrow-forward"
                size={24}
                color="white"
                style={styles.SignInButtonNextIcon}
              />
            </View>
          </View>
        </OpacityButton>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>
            Don't have an Account?{" "}
            <Text style={styles.signUpLink} onPress={redirectToSignUp}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
