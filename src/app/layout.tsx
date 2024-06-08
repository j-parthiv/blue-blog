import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PostsProvider } from "../contexts/PostsContext";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Avenir Blog",
  description: "Read blogs from the Blue Avenir team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PostsProvider>
          <main className="w-full p-5 mx-auto 2xl:px-[10em] container">
            <Navbar />
            {children}
          </main>
        </PostsProvider>
      </body>
    </html>
  );
}
