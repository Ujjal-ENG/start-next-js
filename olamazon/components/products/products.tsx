import { products } from "@wix/stores";
import Link from "next/link";

interface ProductProps {
  product: products.Product;
}

export default function Products({ product }: ProductProps) {
  return <Link href={`/products/${product.slug}`}>{product.name}</Link>;
}
