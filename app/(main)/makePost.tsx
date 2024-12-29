import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
const { width } = Dimensions.get("window");
import styles from "@/styles/makePostStyles";
import {
  uploadImageToBucket,
  uploadPost,
  deleteImageFromBucket,
} from "@/components/backend/createPost";
import ModalComponent from "@/components/Modal";
import { useContext } from "react";
import { UserContext } from "../_layout";

const CreatePostScreen = () => {
  const [postText, setPostText] = useState("");
  const [selectedImageFile, setSelectedImageFile] = useState<
    ImagePicker.ImagePickerAsset | undefined
  >(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{
    title?: string;
    message: string;
    error: boolean;
  }>({
    error: false,
    message: "",
  });
  const router = useRouter();
  const userData = useContext(UserContext);

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handlePost = async () => {
    setLoading(true);
    let imageUrl;
    let uploadedImage;
    try {
      if (selectedImageFile) {
        uploadedImage = await uploadImageToBucket(
          selectedImageFile,
          userData?.userData?.id
        );
        imageUrl = uploadedImage.path;
      }
      await uploadPost(postText, imageUrl, userData?.userData?.id);
      router.push("/(main)/feeds");
      router.back();
    } catch (e: any) {
      if (uploadedImage?.path) {
        await deleteImageFromBucket(uploadedImage.path);
      }
      setError({
        error: true,
        message: e.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const selectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImageFile(result.assets[0]);
    }
  };

  return (
    <View style={styles.container}>
      <ModalComponent
        title={error.title}
        message={error.message}
        visible={error.error}
        type="error"
        onClose={() => setError({ error: false, message: "" })}
      />
      {loading && (
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color="white" />
        </View>
      )}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.contentContainer}>
        <TextInput
          style={styles.input}
          placeholder="What's on your mind?"
          multiline
          value={postText}
          onChangeText={setPostText}
        />
        {selectedImageFile && (
          <Image
            source={{ uri: selectedImageFile.uri }}
            style={styles.selectedImage}
          />
        )}
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.imageButton} onPress={selectImage}>
          <Ionicons name="images-outline" size={30} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePostScreen;
