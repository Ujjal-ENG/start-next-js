import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex justify-end">
      <nav className="flex items-center gap-3 w-full">
        <Link href={"/signin"} className="header-button">
          <UserIcon className="w-6 h-6" />
          <span className="font-bold">Sign In</span>
        </Link>

        <Link href={"/cart"} className="header-button">
          <ShoppingCartIcon className="w-6 h-6" />
          <span className="font-bold">Add to Cart</span>
        </Link>
      </nav>
    </div>
  );
}
