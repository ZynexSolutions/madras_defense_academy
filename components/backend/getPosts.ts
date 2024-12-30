import { supabase } from "./supabase";

export async function getPosts(skip: number = 0) {
    const { data, error } = await supabase
        .from("posts")
        .select(`
            *,
            owner:profiles (
                id,
                full_name,
                image_url
            ),
            comments_count: comments (count)      
        `, {count: 'exact'})
        .range(skip, skip + 9);


    if (error) {
        throw error;
    }

    // Transform the data to extract the actual count
    const transformedData = data?.map(post => ({
        ...post,
        comments_count: Array.isArray(post.comments_count) 
            ? post.comments_count[0]?.count || 0 
            : 0
    }));

    return transformedData;
}