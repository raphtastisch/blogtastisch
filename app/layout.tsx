import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getAllPosts } from "@/lib/getPosts";
import { Navigation } from "@/components/navigation/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raphis Blog",
  description: "Raphis personal blog",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const components: { title: string; href: string; longDescription string }[] = [
  //   {}];

  const mainNavbarData = await getAllPosts().then((data) => {
    // sort data by date to get newest first
    return data
      .sort((a, b) => {
        return (
          new Date(b.frontmatter.date).getTime() -
          new Date(a.frontmatter.date).getTime()
        );
      })
      .map((article) => {
        return {
          title: article.frontmatter.title,
          href: `/${article.category}/${article.frontmatter.slug}`,
          shortDescription: article.frontmatter.shortDescription,
          category: article.category,
          date: article.frontmatter.date,
        };
      });
    // Use the frontmatterArray as needed
  });

  // console.log("layout", mainNavbarData);

  return (
    <html lang="de">
      <body className="w-screen flex md:justify-center bg-white text-black overflow-x-hidden">
        <main className="flex flex-col space-y-4 w-sm sm:w-full 2xl:w-2xl px-2 xl:px-16 items-center pb-32  ">
          <div className="flex-none ">
            <Navigation navDataFull={mainNavbarData} />
          </div>
          <div className="w-full flex flex-col items-center">{children}</div>
        </main>
        <SpeedInsights/>
      </body>
    </html>
  );
}
