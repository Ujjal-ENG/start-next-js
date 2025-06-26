"use client";

import Navbar from "@/compoenents/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function OrgLandingPage() {
  return (
    <main>
      <Navbar />
      <div>
        <h1 className="font-medium text-xl">Create Your OWn Blog</h1>
        <Input
          className="max-w-3xl p-2 via-border m-2"
          placeholder="Enter the Title here of the blog"
        />
        <Textarea className="max-w-3xl p-2 via-30% grayscale-50 m-2" />
        <Button className="cursor-pointer p-2 via-30% grayscale-50 m-2">
          Create Blog
        </Button>
      </div>
    </main>
  );
}
