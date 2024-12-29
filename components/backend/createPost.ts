import { ImagePickerAsset } from "expo-image-picker";
import { supabase } from "./supabase";

export async function uploadImageToBucket(image: ImagePickerAsset, userId?: string) {

    if(userId === undefined) {
        throw new Error("User id is required");
    }
    if(!image.uri) {
        throw new Error("Image uri is required");
    }

    const arraybuffer = await fetch(image.uri).then((res) => res.arrayBuffer())

    const fileExt = image.uri?.split('.').pop()?.toLowerCase() || 'jpeg';
    const path = `${userId}/${Date.now()}.${fileExt}`;
    const mimeType = image.mimeType || `image/${fileExt}`;

    const { data, error: uploadError } = await supabase.storage
      .from('post-images')
      .upload(path, arraybuffer, {
        contentType: mimeType,
      });

    if (uploadError) {
      throw uploadError;
    }

    return data;
}

export async function deleteImageFromBucket(path: string) {
    const { error } = await supabase.storage
      .from('post-images')
      .remove([path]);

    if (error) {
      throw error;
    }
}

export async function uploadPost(content: string, imageurl?: string, owner?: string) {
    if (!content.trim()) {
        throw new Error("Post content cannot be empty");
    }
    const { data, error } = await supabase.from("posts").insert([
        {
            owner,
            content,
            image_url: imageurl
        }
    ])

    if (error) {
        throw error;
    }

    return data;
}