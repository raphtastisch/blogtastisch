import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import { contentPath, categories, contentFolder, Category, ImageType, backupImagePaths } from "./config";




export async function getAllPosts(): Promise<any[]> {
    // get all subfolders within the articlesPath
    const subfolders: string[] = fs.readdirSync(path.join(process.cwd(), ...contentPath), { withFileTypes: true })
        .filter((dirent: fs.Dirent) => dirent.isDirectory())
        .map((dirent: fs.Dirent) => dirent.name);

    // get content and frontmatter (=metadata) for each article in each subfolder
    const data: any[] = [];

    // subfolder = category
    for (const category of subfolders) {
        const folderPath = path.join(process.cwd(), ...contentPath, category);
        const filenames: string[] = fs.readdirSync(folderPath, { withFileTypes: true })
            .filter((dirent: fs.Dirent) => dirent.isFile())
            .map((dirent: fs.Dirent) => dirent.name);

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


export async function getPostBySlug(slug: string): Promise<{ content: any, frontmatter: any, category: Category|null }> {

    // check in all folders
    for (const category of categories) {

        try {
            // get content and frontmatter (=metadata) for one article
            const { content, frontmatter } = await compileMDX<{ title: string }>({
                source: fs.readFileSync(
                    path.join(process.cwd(), ...contentPath, category, slug + ".mdx"), //add .mdx
                    "utf8"
                ),
                options: { parseFrontmatter: true },
            });
            return { content, frontmatter, category }

        } catch (error) {
            null
        }
    }

    // return an error if no article was found
    console.log("Error: Artikle not found: ", slug)
    return { content: null, frontmatter: null, category: null }
}


export async function getImagesForContent(category: Category, slug: string): Promise<any> {

    // get all images in the folder
    const folderPath = path.join(process.cwd(), "public", contentFolder, category, slug);
    const filenames: string[] = fs.readdirSync(folderPath);

    // filter for images
    const images = filenames.filter((filename: string) => {
        const extension = filename.split(".").pop();
        return extension === "jpg" || extension === "png" || extension === "jpeg";
    });

    // return the images
    return images;
}


export async function getImagePath(
    category: Category,
    slug: string,
    imagename: ImageType
) {

    try {
        const images: string[] = await getImagesForContent(category, slug);

        // find the image with the given name, regardless of the image extension
        const imagenameWithExtension = images.find((image) => image.includes(imagename));
        return `/${contentFolder}/${category}/${slug}/${imagenameWithExtension}`;
    }
    catch (err) {
        console.log("No image found, using backup image instead");

        return backupImagePaths[category][imagename]
    }
}
