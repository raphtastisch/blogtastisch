"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import NavLinks from "@/app/ui/dashboard/nav-links";

// import { PowerIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  // get pathname to give the current article a different color
  const pathname = usePathname();

  const categories: string[] = ["books"];

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-8 items-end justify-start rounded-md bg-blue-600 p-4"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <div>LGOG PLACEHOLDER</div>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {categories.map((category: string) => {
          return <Link key={category} href={`/${category}`}>books</Link>;
        })}

        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
