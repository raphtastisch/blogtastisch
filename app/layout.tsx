import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getAllPosts } from "@/lib/getPosts";
import { Navigation } from "@/components/navigation/navigation";

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
      <body className="w-screen flex px-2 sm:px-8 md:justify-center bg-white text-black">
        <main className="flex flex-col space-y-8 w-sm sm:w-full xl:w-xl items-center pb-32 ">
          <div className="flex-none ">
            <Navigation navDataFull={mainNavbarData} />
            {/* <MainNavigation mainNavDataFull={mainNavbarData} /> */}
          </div>
          <div className="w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
