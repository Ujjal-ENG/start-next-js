"use client";

import { useState } from "react";

export default function Home() {
  const [project, setProject] = useState<boolean>(true);
  const [blogPost, setBlogPost] = useState<boolean>(false);

  // Function to handle project selection
  const handleProjectSelect = () => {
    setProject((prev) => !prev);
    setBlogPost(false); // Reset blog post selection when switching to projects
  };

  // Function to handle blog post selection
  const handleBlogPostSelect = () => {
    setBlogPost((prev) => !prev);
    setProject(false); // Reset project selection when switching to blog posts
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
              onClick={handleProjectSelect}
              className="text-blue-500 cursor-pointer p-2 rounded-md m-2 hover:bg-amber-200 transition-all duration-150 active:bg-amber-400 active:text-white  outline-2 hover:underline"
            >
              Projects
            </button>
            <button
              onClick={handleBlogPostSelect}
              className="text-blue-500 cursor-pointer p-2 rounded-md m-2 hover:bg-amber-200 transition-all duration-150 active:bg-amber-400 active:text-white outline-2 hover:underline"
            >
              Blog Posts
            </button>
          </nav>

          {project && (
            <div className="mt-4">
              <h2 className="text-2xl font-semibold">Projects</h2>
              <p className="text-gray-600">
                Here you can manage your projects.
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
              </ul>
            </div>
          )}

          {blogPost && (
            <div className="mt-4">
              <h2 className="text-2xl font-semibold">Blog Posts</h2>
              <p className="text-gray-600">
                Here you can manage your blog posts.
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>Blog Post 1</li>
                <li>Blog Post 2</li>
                <li>Blog Post 3</li>
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
