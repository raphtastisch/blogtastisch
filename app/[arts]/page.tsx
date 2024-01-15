import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { getAllArticles, getArticleBySlug } from "../lib/getarticles";

// not sure if actually working
export async function generateStaticParams() {
  //   function getAllFilenames() {
  //     const folderPath = path.join(process.cwd(), "public", "data");
  //     const filenames = fs.readdirSync(folderPath);
  //     return filenames;
  //   }

  //   // Usage
  //   const filenames = getAllFilenames();
  //   console.log(filenames);
  //   //   const filenames: string[] = ["aufklaerungjetzt.mdx"];

  const data = await getAllArticles();

//   console.log("dynamicpath data", data);

  return data.map((content: any, frontmatter: any) => ({
    params: { arts: frontmatter.filename },
  }));
}

export default async function Home(params: any) {
//   console.log("dynamicpath object", params);

//   const { content, frontmatter } = await compileMDX<{ title: string }>({
//     source: fs.readFileSync(
//       path.join(process.cwd(), "public", "data", params.params.arts + ".mdx"),
//       "utf8"
//     ),
//     options: { parseFrontmatter: true },
//   });

  const {content, frontmatter} = await getArticleBySlug(params.params.arts)

  return (
    <div className="mdx">
      Titel: {frontmatter.title} {content}
    </div>
  );
}
