"use client";

import { postTypes } from "@/utils/postEnums";
import React, { createContext, useContext, ReactNode, useReducer } from "react";

interface PostsContextProps {
  posts: Post[];
  loading: boolean;
  error: Error | null;
}

interface PostsProviderProps {
  children: ReactNode;
}

const initialState: PostsContextProps = {
  posts: [],
  loading: true,
  error: null,
};

const Reducer = (state: PostsContextProps, action: any) => {
  switch (action.type) {
    case postTypes.UPDATE_POSTS:
      return { ...state, posts: action.payload, loading: false };
    case postTypes.FETCH_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const PostsContext = createContext<PostsContextProps | any>(
  initialState
);

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <PostsContext.Provider value={[state, dispatch]}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePostContext = () => {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
};
