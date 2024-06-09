import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PostsProvider } from "../contexts/PostsContext";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

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
          <main className="w-full mx-auto 2xl:px-[10em] container">
            <Navbar />
            <div className="p-5">{children}</div>
          </main>
          <Footer />
        </PostsProvider>
      </body>
    </html>
  );
}
