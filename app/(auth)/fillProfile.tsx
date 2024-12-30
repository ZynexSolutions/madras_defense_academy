import Placeholder from "@/components/Placeholder";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { OpacityButton } from "@/components/OpacityButton";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import styles from "@/styles/fillProfileStyles";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import { UserContext } from "../_layout";
import { supabase } from "@/components/backend/supabase";
import ModalComponent from "@/components/Modal";
import DateTimePicker from "@react-native-community/datetimepicker";

const { width } = Dimensions.get("window");

const FillProfileScreen = () => {
  const [gender, setGender] = useState<string | undefined>(undefined);
  const [full_name, setFull_name] = useState<string | undefined>(undefined);
  const [bio, setBio] = useState<string | undefined>(undefined);
  const [date_of_birth, setDate_of_birth] = useState<Date | undefined>(
    undefined
  );
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [phone_number, setPhone_number] = useState<string | undefined>(
    undefined
  );

  interface IErrorSignIn {
    title?: string;
    message: string;
    error: boolean;
  }
  const [error, setError] = useState<IErrorSignIn>({
    error: false,
    message: "",
  });

  const router = useRouter();
  const userData = useContext(UserContext);

  const onChange = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate_of_birth(selectedDate);
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  function goToTheLastPage() {
    if (router.canGoBack()) {
      router.back();
    }
  }

  async function updateUserDetails() {
    if (
      !full_name ||
      !bio ||
      !date_of_birth ||
      (!userData?.userData?.user_metadata?.email && !email) ||
      (!userData?.userData?.user_metadata?.phone_number && !phone_number) ||
      !gender
    ) {
      setError({
        error: true,
        message: "Please fill in all the fields",
      });
      return;
    }

    // Update profile in profiles table
    const { error: profileError } = await supabase.from("profiles").upsert({
      id: userData?.userData?.id,
      full_name,
      bio,
      date_of_birth: date_of_birth.toISOString().split("T")[0], // Format as YYYY-MM-DD
      gender,
      updated_at: new Date().toISOString(),
    });

    if (profileError) {
      setError({
        error: true,
        message: profileError.message,
      });
      return;
    }

    // Update email if provided
    if (!userData?.userData?.user_metadata?.email && email) {
      const { error: emailError } = await supabase.auth.updateUser({
        email: email,
      });

      if (emailError) {
        setError({
          error: true,
          message: emailError.message,
        });
        return;
      }
    }

    // Update phone if provided
    if (!userData?.userData?.user_metadata?.phone_number && phone_number) {
      const { error: phoneError } = await supabase.auth.updateUser({
        data: { phone_number: phone_number },
      });

      if (phoneError) {
        setError({
          error: true,
          message: phoneError.message,
        });
        return;
      }
    }

    router.replace("/(main)");
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <ModalComponent
            title={error.title}
            message={error.message}
            visible={error.error}
            type="error"
            onClose={() => setError({ error: false, message: "" })}
          />
          <View style={styles.header}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="black"
              style={styles.backIcon}
              onPress={goToTheLastPage}
            />
            <Text style={styles.title}>Fill Your Profile</Text>
          </View>
          <View style={styles.topSection}>
            <View style={styles.profilePicContainer}>
              <Placeholder
                width={width * 0.3}
                height={width * 0.3}
                borderRadius={(width * 0.3) / 2}
              />
              <View style={styles.editIconContainer}>
                <Ionicons
                  name="pencil"
                  size={16}
                  color="white"
                  style={styles.editIcon}
                />
              </View>
            </View>
          </View>
          <View style={styles.bottomSection}>
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Full Name"
                  style={styles.input}
                  onChangeText={(text) => setFull_name(text)}
                  value={full_name}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Bio"
                  style={styles.input}
                  onChangeText={(text) => setBio(text)}
                  value={bio}
                />
              </View>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="calendar-outline"
                  size={24}
                  color="gray"
                  style={styles.icon}
                />
                <TouchableOpacity
                  onPress={showDatepicker}
                  style={{ flex: 1, height: 52, justifyContent: "center" }}
                >
                  <Text style={{ color: date_of_birth ? "black" : "gray" }}>
                    {date_of_birth
                      ? date_of_birth.toLocaleDateString()
                      : "Date of Birth"}
                  </Text>
                </TouchableOpacity>
                {showDatePicker && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date_of_birth || new Date()}
                    mode="date"
                    display="default"
                    onChange={onChange}
                  />
                )}
              </View>
              {!userData?.userData?.user_metadata?.email && (
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
              )}
              {!userData?.userData?.user_metadata?.phone_number && (
                <View style={styles.inputContainer}>
                  <Ionicons
                    name="call-outline"
                    size={24}
                    color="gray"
                    style={styles.icon}
                  />
                  <TextInput
                    placeholder="(+91) 987 654 3210"
                    style={styles.input}
                    onChangeText={(text) => setPhone_number(text)}
                    value={phone_number}
                  />
                </View>
              )}
              <View style={styles.inputContainer}>
                <Picker
                  selectedValue={gender}
                  style={styles.picker}
                  onValueChange={(itemValue: any, itemIndex: any) =>
                    setGender(itemValue)
                  }
                >
                  <Picker.Item
                    label="Gender"
                    value={undefined}
                    color="gray"
                    style={{ fontSize: 16 }}
                  />
                  <Picker.Item
                    label="Male"
                    value="male"
                    style={{ fontSize: 16 }}
                  />
                  <Picker.Item
                    label="Female"
                    value="female"
                    style={{ fontSize: 16 }}
                  />
                  <Picker.Item
                    label="Other"
                    value="other"
                    style={{ fontSize: 16 }}
                  />
                </Picker>
              </View>
            </View>
            <OpacityButton
              onPress={updateUserDetails}
              style={styles.continueButton}
            >
              <View style={styles.buttonContent}>
                <Text style={styles.continueButtonText}>Continue</Text>
                <View style={styles.continueButtonNextIconContainer}>
                  <Ionicons
                    name="arrow-forward"
                    size={24}
                    color="white"
                    style={styles.continueButtonNextIcon}
                  />
                </View>
              </View>
            </OpacityButton>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default FillProfileScreen;
