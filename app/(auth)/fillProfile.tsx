import Placeholder from "@/components/Placeholder";
import { View, Text, Dimensions, TextInput } from "react-native";
import { OpacityButton } from "@/components/OpacityButton";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import styles from "@/styles/fillProfileStyles";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const FillProfileScreen = () => {
  const [gender, setGender] = useState();

  const router = useRouter();

  function goToTheLastPage() {
    if (router.canGoBack()) {
      router.back();
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
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
            <TextInput placeholder="Full Name" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Nick Name" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name="calendar-outline"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput placeholder="Date of Birth" style={styles.input} />
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
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name="call-outline"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput placeholder="(+91) 987 654 3210" style={styles.input} />
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
                value=""
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
          onPress={() => {
            console.log("continue");
          }}
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
    </SafeAreaView>
  );
};

export default FillProfileScreen;
