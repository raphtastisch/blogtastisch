import Sidebar from "@/components/categorySidebar";
import { getAllPosts } from "@/lib/getarticles";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

//   const metadata = await getAllArticles().then((data) => {
//     return data.map((article) => {
//       return { frontmatter: article.frontmatter, category: article.category };
//     });
//     // Use the frontmatterArray as needed
//   });

// //   console.log("layout", metadata);


  return (
    <div className="flex flex-row">
      {/* <Sidebar postMetadata={metadata}/> */}
      {children}
    </div>
  );
}
