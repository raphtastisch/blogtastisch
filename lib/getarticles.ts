import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";

const articlesPath = ["public", "data"]


export async function getAllArticles(): Promise<any[]> {
    // get all subfolders within the articlesPath
    const subfolders: string[] = fs.readdirSync(path.join(process.cwd(), ...articlesPath), { withFileTypes: true })
        .filter((dirent: fs.Dirent) => dirent.isDirectory())
        .map((dirent: fs.Dirent) => dirent.name);

    // get content and frontmatter (=metadata) for each article in each subfolder
    const data: any[] = [];

    // subfolder = category
    for (const category of subfolders) {
        const folderPath = path.join(process.cwd(), ...articlesPath, category);
        const filenames: string[] = fs.readdirSync(folderPath);

        const articles = await Promise.all(
            filenames.map(async (filename: string) => {
                const { content, frontmatter } = await compileMDX<{ title: string }>({
                    source: fs.readFileSync(
                        path.join(folderPath, filename),
                        "utf8"
                    ),
                    options: { parseFrontmatter: true },
                });

                return { content, frontmatter, category };
            })
        );
        data.push(...articles)
    }
    return data;
}

// export async function getAllArticles(category: string = "books"): Promise<any[]> {
//     // get all files = all articles
//     const folderPath = path.join(process.cwd(), ...articlesPath, category);
//     const filenames: string[] = fs.readdirSync(folderPath);

//     // get content and frontmatter (=metadata) for each article
//     const data: any[] = await Promise.all(
//         filenames.map(async (filename: string) => {
//             const { content, frontmatter } = await compileMDX<{ title: string }>({
//                 source: fs.readFileSync(
//                     path.join(process.cwd(), ...articlesPath, category, filename),
//                     "utf8"
//                 ),
//                 options: { parseFrontmatter: true },
//             });

//             return { content, frontmatter }; // {content, frontmatter}
//         })
//     );

//     return data
// }


export async function getArticleBySlug(slug: string, category: string = "books"): Promise<{ content: any, frontmatter: any, category: any }> {

    try {
        // get content and frontmatter (=metadata) for one article
        const { content, frontmatter } = await compileMDX<{ title: string }>({
            source: fs.readFileSync(
                path.join(process.cwd(), ...articlesPath, category, slug + ".mdx"), //add .mdx
                "utf8"
            ),
            options: { parseFrontmatter: true },
        });
        return { content, frontmatter, category }
    }
    catch (error) {
        console.log("error whil getting article by slug: ", error)
        return { content: null, frontmatter: null, category: category }
    }
}