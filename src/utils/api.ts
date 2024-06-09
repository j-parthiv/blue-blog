import axios from "axios";

// Function to handle errors
function handleAxiosError(error: any): string {
  let errorMessage = "An unknown error occurred";

  if (axios.isAxiosError(error)) {
    errorMessage = error.response?.data?.message || error.message;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return errorMessage;
}

// Function to get all posts
export async function getPosts(): Promise<PostProps> {
  try {
    const res = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
    return { posts: res.data, error: null };
  } catch (error) {
    return { posts: [], error: handleAxiosError(error) };
  }
}

// Function to get a post by its ID
export async function getPostById(id: string): Promise<SinglePostProps> {
  try {
    const res = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return { post: res.data, error: null };
  } catch (error) {
    return { post: undefined, error: handleAxiosError(error) };
  }
}
