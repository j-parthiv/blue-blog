"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsContextProps {
  posts: Post[];
  loading: boolean;
  error: Error | null;
}

const PostsContext = createContext<PostsContextProps | undefined>(undefined);

export const usePosts = (): PostsContextProps => {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
};

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // ("use server");
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            headers: {
              "Cache-Control": "no-cache",
            },
          }
        );
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, loading, error }}>
      {children}
    </PostsContext.Provider>
  );
};
