import Placeholder from "@/components/Placeholder";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { OpacityButton } from "@/components/OpacityButton";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useContext, useEffect } from "react";
import styles from "@/styles/editProfileStyles";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import { UserContext } from "../_layout";
import { supabase } from "@/components/backend/supabase";
import ModalComponent from "@/components/Modal";
import DateTimePicker from "@react-native-community/datetimepicker";

const { width } = Dimensions.get("window");

const EditProfileScreen = () => {
  const [gender, setGender] = useState<string | undefined>(undefined);
  const [initialGender, setInitialGender] = useState<string | undefined>(
    undefined
  );
  const [full_name, setFull_name] = useState<string | undefined>(undefined);
  const [initialFullName, setInitialFullName] = useState<string | undefined>(
    undefined
  );
  const [nick_name, setNick_name] = useState<string | undefined>(undefined);
  const [initialNickName, setInitialNickName] = useState<string | undefined>(
    undefined
  );
  const [date_of_birth, setDate_of_birth] = useState<Date | undefined>(
    undefined
  );
  const [initialDateOfBirth, setInitialDateOfBirth] = useState<
    Date | undefined
  >(undefined);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [initialEmail, setInitialEmail] = useState<string | undefined>(
    undefined
  );
  const [phone_number, setPhone_number] = useState<string | undefined>(
    undefined
  );
  const [initialPhoneNumber, setInitialPhoneNumber] = useState<
    string | undefined
  >(undefined);

  interface IErrorSignIn {
    title?: string;
    message: string;
    error: boolean;
  }
  interface ISuccessSignIn {
    title?: string;
    message: string;
    success: boolean;
  }
  const [error, setError] = useState<IErrorSignIn>({
    error: false,
    message: "",
  });
  const [success, setSuccess] = useState<ISuccessSignIn>({
    success: false,
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

  useEffect(() => {
    if (userData?.userData?.user_metadata) {
      setInitialFullName(userData.userData.user_metadata.full_name);
      setInitialNickName(userData.userData.user_metadata.nick_name);
      setInitialDateOfBirth(
        userData.userData.user_metadata.date_of_birth
          ? new Date(userData.userData.user_metadata.date_of_birth)
          : undefined
      );
      setInitialGender(userData.userData.user_metadata.gender);
      setInitialEmail(userData.userData.user_metadata.email);
      setInitialPhoneNumber(userData.userData.user_metadata.phone_number);

      setFull_name(userData.userData.user_metadata.full_name);
      setNick_name(userData.userData.user_metadata.nick_name);
      setDate_of_birth(
        userData.userData.user_metadata.date_of_birth
          ? new Date(userData.userData.user_metadata.date_of_birth)
          : undefined
      );
      setGender(userData.userData.user_metadata.gender);
      setEmail(userData.userData.user_metadata.email);
      setPhone_number(userData.userData.user_metadata.phone_number);
    }
  }, [userData]);

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
      full_name === initialFullName &&
      nick_name === initialNickName &&
      (date_of_birth?.toISOString() === initialDateOfBirth?.toISOString() ||
        (!date_of_birth && !initialDateOfBirth)) &&
      email === initialEmail &&
      phone_number === initialPhoneNumber &&
      gender === initialGender
    ) {
      setError({
        error: true,
        message: "No data modified",
      });
      return;
    }
    if (
      !full_name ||
      !nick_name ||
      !date_of_birth ||
      !email ||
      !phone_number ||
      !gender
    ) {
      setError({
        error: true,
        message: "Please fill in all the fields",
      });
      return;
    }

    interface Updates {
      full_name: string | undefined;
      nick_name: string | undefined;
      date_of_birth: string | undefined;
      gender: string | undefined;
      email?: string | undefined;
      phone_number?: string | undefined;
    }

    const updates: Updates = {
      full_name: full_name,
      nick_name: nick_name,
      date_of_birth: date_of_birth?.toISOString(),
      gender: gender,
      email: email,
      phone_number: phone_number,
    };

    const { data, error: err } = await supabase.auth.updateUser({
      data: updates,
    });

    if (err) {
      setError({
        error: true,
        message: err.message,
      });
      return;
    }
    setSuccess({
      success: true,
      message: "Profile updated successfully",
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
      <ModalComponent
        title={success.title}
        message={success.message}
        visible={success.success}
        type="confirmation"
        confirmText={"Done"}
        onConfirm={() => {
          setSuccess({ success: false, message: "" });
          userData?.refreshUserData();
          goToTheLastPage();
        }}
      />
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          style={styles.backIcon}
          onPress={goToTheLastPage}
        />
        <Text style={styles.title}>Edit Profile</Text>
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
              name="camera-outline"
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
              placeholder="Nick Name"
              style={styles.input}
              onChangeText={(text) => setNick_name(text)}
              value={nick_name}
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
              <Picker.Item label="Male" value="male" style={{ fontSize: 16 }} />
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
            <Text style={styles.continueButtonText}>Update</Text>
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
    </SafeAreaView>
  );
};

export default EditProfileScreen;
