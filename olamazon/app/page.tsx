"use client";
import banner from "@/assets/banner.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="mx-auto max-w-7xl space-y-10 px-4 py-10">
      <div className="bg-secondary flex items-center md:h-96">
        <div className="space-y-6 p-10 text-center md:w-1/2">
          <h1 className="text-3xl font-bold md:text-4xl">
            Fill the void in your life with a new hobby
          </h1>
          <p>
            Tough Day? Credit card maxed out? Buy some expensive stuff and
            become happy again!!
          </p>
          <Button asChild>
            <Link href={"/shop"}>
              Shop Now <ArrowRight className="inline size-5" />
            </Link>
          </Button>
        </div>

        <div className="relative hidden h-full md:block md:w-1/2">
          <Image
            src={banner}
            alt="Banner Image"
            className="h-full w-full object-cover"
          />
          <div className="from-secondary absolute inset-0 bg-gradient-to-r via-transparent to-transparent"></div>
        </div>
      </div>
    </main>
  );
}
