"use client";
import Hero from "@/components/Hero";
import Posts from "@/components/Posts";
export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-5 justify-center items-center	py-7">
        <Hero />
        <Posts />
      </section>
    </>
  );
}
