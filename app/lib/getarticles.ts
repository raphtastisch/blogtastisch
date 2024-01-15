import path from "path";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";

const articlesPath = ["public", "data"]

export async function getAllArticles(): Promise<any[]> {
    const folderPath = path.join(process.cwd(), ...articlesPath);
    const filenames: string[] = fs.readdirSync(folderPath);

    const data: any[] = await Promise.all(
        filenames.map(async (filename: string) => {
            const { content, frontmatter } = await compileMDX<{ title: string }>({
                source: fs.readFileSync(
                    path.join(process.cwd(), ...articlesPath, filename),
                    "utf8"
                ),
                options: { parseFrontmatter: true },
            });

            return { content, frontmatter }; // {content, frontmatter}
        })
    );

    return data
}

export async function getArticleBySlug(slug: string): Promise<any> {

    const { content, frontmatter } = await compileMDX<{ title: string }>({
        source: fs.readFileSync(
            path.join(process.cwd(), "public", "data", slug + ".mdx"),
            "utf8"
        ),
        options: { parseFrontmatter: true },
    });

    return { content, frontmatter }
}