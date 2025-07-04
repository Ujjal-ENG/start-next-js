"use client";
import banner from "@/assets/banner.jpg";
import Products from "@/components/products/products";
import { Button } from "@/components/ui/button";
import { delay } from "@/lib/utils";
import { getWixClient } from "@/lib/wix-client.base";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
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
      <Suspense
        fallback={<div className="h-10 w-10 animate-pulse bg-red-300" />}
      >
        <FeaturedProducts />
      </Suspense>
    </main>
  );
}

async function FeaturedProducts() {
  await delay(1000);

  const wixClient = getWixClient();

  const { collection } =
    await wixClient.collections.getCollectionBySlug("featured-products");

  if (!collection?._id) {
    return null;
  }

  const featuredProducts = await wixClient.products
    .queryProducts()
    .hasSome("collectionIds", [collection._id])
    .descending("lastUpdated")
    .find();

  if (!featuredProducts.items.length) {
    return null;
  }
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold">Featured Products</h2>
      <div className="flex grid-cols-2 flex-col gap-5 sm:grid md:grid-cols-3 lg:grid-cols-4">
        {featuredProducts.items.map((product) => (
          <Products key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
