"use client";

import BlogPost from "@/components/blog-post";
import Project from "@/components/projects";
import {
  startTransition,
  useState,
  unstable_ViewTransition as ViewTransition,
} from "react";

type Menu = "projects" | "blogPosts";

export default function Home() {
  const [menu, setMenu] = useState<Menu | null>(null);

  const onSelected = (selectedMenu: Menu) => {
    startTransition(() => setMenu(selectedMenu));
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-black">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Welcome to the Next.js App
        </h1>
        <p className="text-lg text-gray-700">
          This is a simple example of a Next.js application using Tailwind CSS.
        </p>

        <div className="max-w-3/6 flex flex-col justify-center items-center shadow-xl shadow-amber-300 rounded-lg p-6 bg-white w-full">
          <nav className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onSelected.bind(null, "projects")}
              className="text-blue-500 cursor-pointer p-2 rounded-md m-2 hover:bg-amber-200 transition-all duration-150 active:bg-amber-400 active:text-white  outline-2 hover:underline"
            >
              Projects
            </button>
            <button
              onClick={onSelected.bind(null, "blogPosts")}
              className="text-blue-500 cursor-pointer p-2 rounded-md m-2 hover:bg-amber-200 transition-all duration-150 active:bg-amber-400 active:text-white outline-2 hover:underline"
            >
              Blog Posts
            </button>
          </nav>

          <ViewTransition>
            {menu === "projects" ? <Project /> : <BlogPost />}
          </ViewTransition>
        </div>
      </main>
    </div>
  );
}
