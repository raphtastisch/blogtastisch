import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import { contentPath, categories, contentFolder, Category, ImageType, backupImagePaths } from "./config";
import React from "react";
import InPostImage from "@/components/ui/inPostImage";
import StyledLink from "@/components/ui/styledLink";
import StyledH1 from "@/components/ui/styledH1";
import StyledH2 from "@/components/ui/styledH2";
import StyledBlockquote from "@/components/ui/styledBlockquote";




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


const widthSettings = " w-sm lg:w-md"
const components = {
    InPostImage,

    h1: (props: any) => (
        React.createElement(StyledH1, { ...props, className: widthSettings }, props.children)
    ),
    h2: (props: any) => (
        React.createElement(StyledH2, { ...props, className: "mt-8 " + widthSettings }, props.children)
    ),
    h3: (props: any) => (
        React.createElement("h3", { ...props, className: "text-xl mt-8 mb-2 text-main-700" + widthSettings }, props.children)
    ),
    p: (props: any) => (
        React.createElement("p", { ...props, className: "mb-2" + widthSettings }, props.children)
    ),
    a: (props: any) => (
        React.createElement(StyledLink, { ...props, className: "" }, props.children)
    ),

    blockquote: (props: any) => (
        React.createElement(StyledBlockquote, { ...props, className: widthSettings }, props.children)
        // React.createElement("blockquote", { ...props, className: "border-l-4 border-main-700 pl-4 mb-4" + widthSettings }, props.children)
    ),


    em: (props: any) => (
        React.createElement("em", { ...props, className: "italic" }, props.children)
    ),
    strong: (props: any) => (
        React.createElement("strong", { ...props, className: "font-bold" }, props.children)
    ),
}



export async function getPostBySlug(slug: string): Promise<{ content: any, frontmatter: any, category: Category | null }> {

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
                components: components,
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
