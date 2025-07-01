import { APP_NAME } from "@/lib/constants";
import { SearchIcon } from "lucide-react";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

const categories = [
  "men",
  "women",
  "electronics",
  "jewelery",
  "books",
  "toys",
  "sports",
  "kids",
  "accessories",
];
export default async function Search() {
  return (
    <form action={"/search"} method="GET" className="flex items-stretch h-10">
      <Select name="category">
        <SelectTrigger className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded-md">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent position="popper" className="w-48">
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        className="flex-1 h-full dark:border-gray-200 bg-gray-100 text-black text-base"
        placeholder={`Search products...${APP_NAME}`}
        name="query"
        type="search"
      />
      <button
        type="submit"
        className="bg-primary  text-black rounded-s-none rounded-e-md h-full px-3 py-2"
      >
        <SearchIcon className="w-5 h-5" />
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
}
