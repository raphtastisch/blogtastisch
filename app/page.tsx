import Image from "next/image";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";

export default async function Home() {


  // Optionally provide a type for your frontmatter object
  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: fs.readFileSync("public/data/aufklaerungjetzt.mdx", "utf8"),
    //{ href: "@/articles/aufklaerungjetzt.mdx" },
    //`---
    // title: RSC Frontmatter Example
    // ---
    //       # Hello World
    //       This is from Server Components!
    //     `,
    options: { parseFrontmatter: true },
  });



  console.log("inpage:", frontmatter);

  return (
    <>
      <h1 className="text-red-500">{frontmatter.title}</h1>
      {content}
    </>
  );
}

// return (
//   <main className="flex min-h-screen flex-col items-center justify-between p-24">
//     hello
//     <Link href="/articles/test">Test</Link>
//   </main>
// );
