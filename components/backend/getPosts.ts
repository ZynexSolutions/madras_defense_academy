import { supabase } from "./supabase";

export async function getPosts(skip: number = 0) {
    const { data, error } = await supabase
        .from("posts")
        .select(`
            *,
            owner:profiles (
                id,
                username,
                avatar_url
            )      
        `)
        .range(skip, skip + 9);


    if (error) {
        throw error;
    }

    return data;
}