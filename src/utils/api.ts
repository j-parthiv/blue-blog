import axios from "axios";

export async function getPosts() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.data;
    return { posts, loading: false, error: null };
}

export async function getPostById(id: string) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.data;
    return { post, loading: false, error: null };
}
