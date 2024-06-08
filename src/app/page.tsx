"use client";
import Posts from "@/components/Posts";
export default function Home() {
  
  return (
    <>
      <section className="flex flex-col gap-5 justify-center items-center	py-7">
        <h1 className="text-4xl font-semibold text-primary">Our Blogs</h1>
        <p className="tracking-wide">
          A center for all our resources & insights
        </p>
        <div>
          <Posts />
        </div>
      </section>
    </>
  );
}
