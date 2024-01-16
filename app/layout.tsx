import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { MainNavigation } from "@/components/mainNavigation";
import { getAllArticles } from "@/lib/getarticles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raphis Blog",
  description: "Raphis personal blog",
};

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const components: { title: string; href: string; description: string }[] = [
  //   {}];

  const mainNavbarData = await getAllArticles().then((data) => {
    
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
          description: article.frontmatter.shortDescription,
          category: article.category,
          date: article.frontmatter.date,
        };
      });
    // Use the frontmatterArray as needed
  });

  console.log("layout", mainNavbarData);

  return (
    <html lang="de">
      <body className="flex flex-col w-screen overflow-hidden">
        <div className="w-full flex-none">
          <MainNavigation mainNavDataFull={mainNavbarData} />
          {/* <Navbar /> */}

          {/* <Navbar articlesMetadata={metadata} /> */}
        </div>
        <div className="flex-grow p-4">{children}</div>
      </body>
    </html>
  );
}
