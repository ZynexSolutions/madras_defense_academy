import Placeholder from "@/components/Placeholder";
import { View, Text, Dimensions, TextInput } from "react-native";
import { OpacityButton } from "@/components/OpacityButton";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import styles from "@/styles/signinStyles";
import Checkbox from "expo-checkbox"; // Import Checkbox
import { useRouter } from "expo-router";
import { UserContext } from "../_layout";
import { supabase } from "@/components/backend/supabase";
import ModalComponent from "@/components/Modal";

const { width } = Dimensions.get("window");

const SignInScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setChecked] = useState(false); // State for checkbox
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password

  interface IErrorSignIn {
    title?: string;
    message: string;
    error: boolean;
  }
  const [error, setError] = useState<IErrorSignIn>({
    error: false,
    message: "",
  });

  const userData = useContext(UserContext);

  const router = useRouter();

  function redirectToSignUp() {
    router.replace("/(auth)/signup");
  }

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN") {
      router.replace("/(main)");
    }
  });

  useEffect(() => {
    userData?.userData && router.replace("/(main)");
  }, []);

  function SignInUserAccount() {
    if (email === "" || password === "") {
      setError({
        error: true,
        message: "Please fill in all the fields",
      });
      return;
    }

    // Sign in user account
    supabase.auth
      .signInWithPassword({
        email: email,
        password: password,
      })
      .then((value) => {
        if (value.error) {
          setError({
            error: true,
            message: value.error.message,
          });
        }
      });
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ModalComponent
        title={error.title}
        message={error.message}
        visible={error.error}
        type="error"
        onClose={() => setError({ error: false, message: "" })}
      />
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
        <Text style={styles.title}>Let's Sign In..!</Text>
        <Text style={styles.subTitle}>
          Login to Your Account to Continue your Courses
        </Text>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              placeholder="Email"
              style={styles.input}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry={!passwordVisible}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <Ionicons
              name={passwordVisible ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="gray"
              style={styles.iconRight}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          </View>
          <View style={styles.rememberContainer}>
            <View style={styles.checkboxAndText}>
              <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                style={styles.checkbox} // Add styling for the checkbox
              />
              <Text style={styles.rememberText}>Remember Me</Text>
            </View>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </View>
        </View>
        <OpacityButton onPress={SignInUserAccount} style={styles.signInButton}>
          <View style={styles.buttonContent}>
            <Text style={styles.signInButtonText}>Sign In</Text>
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
        <Text style={styles.orText}>Or Continue With</Text>

        <View style={styles.authButtonsContainer}>
          <OpacityButton
            onPress={() => console.log("Continue with Google")}
            style={styles.authButton}
          >
            <View style={styles.buttonContent}>
              <Ionicons name="logo-google" size={24} />
            </View>
          </OpacityButton>
          <OpacityButton
            onPress={() => console.log("Continue with Apple")}
            style={styles.authButton}
          >
            <View style={styles.buttonContent}>
              <Ionicons name="logo-apple" size={24} />
            </View>
          </OpacityButton>
        </View>

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

export default SignInScreen;
