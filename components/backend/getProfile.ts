import { supabase } from "./supabase";

export async function getUserProfile(userId?: string) {
    if (!userId) {
        throw new Error("User ID is required");
    }

    const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

    if (error) {
        throw error;
    }

    return data;
}
