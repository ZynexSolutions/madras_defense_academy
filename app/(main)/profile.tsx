import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "@/styles/profileStyles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Placeholder from "@/components/Placeholder";
import { Dimensions } from "react-native";
import BottomNavigationBar from "@/components/BottomNavigationBar";

const { width } = Dimensions.get("window");

const ProfileScreen = () => {
  const navigation = useNavigation();

  const menuItems = [
    {
      title: "Edit Profile",
      icon: "person-outline",
      route: "(profile)/editProfile",
    },
    { title: "Payment Option", icon: "card-outline", route: "PaymentOption" },
    {
      title: "Notifications",
      icon: "notifications-outline",
      route: "Notifications",
    },
    { title: "Security", icon: "shield-checkmark-outline", route: "Security" },
    {
      title: "Language",
      icon: "language-outline",
      route: "Language",
      value: "English (US)",
    },
    {
      title: "Dark Mode",
      icon: "eye-outline",
      route: "DarkMode",
      value: "Off",
    },
    {
      title: "Terms & Conditions",
      icon: "document-text-outline",
      route: "TermsAndConditions",
    },
    { title: "Help Center", icon: "help-circle-outline", route: "HelpCenter" },
    { title: "Intive Friends", icon: "mail-outline", route: "InviteFriends" },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="black"
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Profile</Text>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Placeholder
              width={width * 0.3}
              height={width * 0.3}
              borderRadius={(width * 0.3) / 2}
            />
            <TouchableOpacity style={styles.editImageIcon}>
              <Ionicons name="camera-outline" size={20} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>James S. Hernandez</Text>
            <Text style={styles.email}>hernandex.redial@gmail.ac.in</Text>
          </View>
        </View>
        <View style={styles.menu}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.menuItem,
                index === menuItems.length - 1 && { borderBottomWidth: 0 },
              ]}
              onPress={() => {
                if (item.route) navigation.navigate(item.route as never);
              }}
            >
              <View style={styles.menuItemContent}>
                <Ionicons name={item.icon as any} size={22} color="black" />
                <Text style={styles.menuItemText}>{item.title}</Text>
              </View>
              <View style={styles.menuItemValueContainer}>
                {item.value && (
                  <Text style={styles.menuItemValue}>{item.value}</Text>
                )}
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ height: 90 }} />
      </ScrollView>
      <BottomNavigationBar />
    </SafeAreaView>
  );
};

export default ProfileScreen;
