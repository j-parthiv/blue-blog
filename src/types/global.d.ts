// /src/types/global.d.ts

// This file can contain global types that are used throughout the app
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

declare global {
  namespace NodeJS {
      interface ProcessEnv {
          NEXT_PUBLIC_API_URL: string;
      }
  }
}
