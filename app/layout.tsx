import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { getAllPosts } from "@/lib/getPosts";
// import { Navigation } from "@/components/navigation/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/navigation/navbar";

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

  // const mainNavbarData = await getAllPosts().then((data) => {
  //   // sort data by date to get newest first
  //   return data
  //     .sort((a, b) => {
  //       return (
  //         new Date(b.frontmatter.date).getTime() -
  //         new Date(a.frontmatter.date).getTime()
  //       );
  //     })
  //     .map((article) => {
  //       return {
  //         title: article.frontmatter.title,
  //         href: `/${article.category}/${article.frontmatter.slug}`,
  //         shortDescription: article.frontmatter.shortDescription,
  //         category: article.category,
  //         date: article.frontmatter.date,
  //       };
  //     });
  //   // Use the frontmatterArray as needed
  // });

  // console.log("layout", mainNavbarData);

  return (
    <html lang="de" className="h-full md:w-screen">
      <body className=" h-full bg-white text-black overflow-x-hidden text-sm sm:text-base md:text-lg">
        <main className="min-h-full">
          {/* <div className="flex-none ">
            <Navigation navDataFull={mainNavbarData} />
          </div> */}
          <Navbar />
          <div className="mx-auto max-w-7xl py-4">
            {/* sm:px-4 lg:px-8 */}
            {children}
          </div>
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
}
