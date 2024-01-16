"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Sidebar({ postMetadata }: any) {
  const pathname = usePathname();

  //   console.log("sidebar", postMetadata);

  return (
    <div className="flex flex-col h-full w-32">
      {postMetadata.map((post: any) => {
        const destination = `/${post.category}/${post.frontmatter.slug}`;

        return (
          <Link
            key={post.frontmatter.title}
            className={cn(
              "flex h-8 items-end justify-start rounded-md bg-blue-600",
              {
                "bg-gray-600 text-red-500": pathname === destination,
              }
            )}
            href={destination}
          >
            <div className="">
              <div>{post.frontmatter.title}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
