import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import { contentPath, categories, contentFolder, Category, ImageType, backupImagePaths, locales, Post, Article, Book, Locale } from "./config";
import React from "react";
import InPostImage from "@/components/ui/inPostImage";
import StyledLink from "@/components/ui/styledLink";
import StyledH1 from "@/components/ui/styledH1";
import StyledH2 from "@/components/ui/styledH2";
import StyledBlockquote from "@/components/ui/styledBlockquote";
import { cn } from "./utils";
import { articles } from "./content/articles";
import { getBooksWithFullText, books } from "./content/books";

// export function getPostWithGermanContent(post: Post): Post {

//     // its important to copy the book, otherwise the original book would be changed
//     const postCopy = { ...post }

//     if (postCopy.titleDE) { postCopy.title = postCopy.titleDE }
//     if (postCopy.subtitleDE) { postCopy.subtitle = postCopy.subtitleDE }
//     if (postCopy.shortDescriptionDE) { postCopy.shortDescription = postCopy.shortDescriptionDE }
//     if (postCopy.longDescriptionDE) { postCopy.longDescription = postCopy.longDescriptionDE }

//     return postCopy
// }

// export function getBooksWithGermanContent(): Book[] {
//     // replaces the content with german content if avialable
//     return books.filter((book) => book.hasFullText).map((book) => getPostWithGermanContent(book) as Book)
// }

// export function getArticlesWithGermanContent(): Article[] {

//     // replaces the content with german content if avialable
//     return articles.map((article) => getPostWithGermanContent(article) as Article)

// }

export function getAllPosts(category?: string): Post[] {
    const result: Post[] = []

    if (category == undefined || category == "books") {
        // add category to each book

        //locale === "de" ? getBooksWithGermanContent() : 
        const bookData = getBooksWithFullText()

        result.push(...bookData)
    }

    if (category == undefined || category == "articles") {

        // locale === "de" ? getArticlesWithGermanContent() :
        const articleData =  articles
        // all articles with metadata have a full text, thus no filtering necessary
        // add the category to each article
        result.push(...articleData)
    }

    return result
}

// export async function getAllPosts(): Promise<any[]> {
//     // get all subfolders within the articlesPath
//     const subfolders: string[] = fs.readdirSync(path.join(process.cwd(), ...contentPath), { withFileTypes: true })
//         .filter((dirent: fs.Dirent) => dirent.isDirectory())
//         .map((dirent: fs.Dirent) => dirent.name);

//     // get content and frontmatter (=metadata) for each article in each subfolder
//     const data: any[] = [];

//     // subfolder = category
//     for (const category of subfolders) {
//         const folderPath = path.join(process.cwd(), ...contentPath, category);
//         const filenames: string[] = fs.readdirSync(folderPath, { withFileTypes: true })
//             .filter((dirent: fs.Dirent) => dirent.isFile())
//             .map((dirent: fs.Dirent) => dirent.name);

//         for (const locale of locales) {
//             const articles = await Promise.all(
//                 filenames.map(async (filename: string) => {
//                     const { content, frontmatter } = await compileMDX<{ title: string }>({
//                         source: fs.readFileSync(
//                             path.join(folderPath, filename),
//                             "utf8"
//                         ),
//                         options: { parseFrontmatter: true },
//                     });

//                     return { content, frontmatter, category, locale };
//                 })
//             );
//             data.push(...articles)
//         }
//     }
//     return data;
// }


const widthSettings = " w-full max-w-text"
const components = {
    InPostImage,

    h1: (props: any) => (
        React.createElement(StyledH1, { ...props, className: cn(widthSettings) }, props.children)
    ),
    h2: (props: any) => (
        React.createElement(StyledH2, { ...props, className: cn("mt-8 ", widthSettings) }, props.children)
    ),
    h3: (props: any) => (
        React.createElement("h3", { ...props, className: cn("text-xl mt-8 mb-2 text-main-700", widthSettings) }, props.children)
    ),

    // helper for source notes
    h6: (props: any) => (
        React.createElement("h6", { ...props, className: cn("text-right mr-4 text-xs md:text-sm italic text-main-700", widthSettings) }, props.children)
    ),
    p: (props: any) => (
        React.createElement("p", { ...props, className: cn("text-start mb-2", widthSettings) }, props.children)
    ),
    a: (props: any) => (
        React.createElement(StyledLink, { ...props, className: "" }, props.children)
    ),

    blockquote: (props: any) => (
        React.createElement(StyledBlockquote, { ...props, className: cn(widthSettings,) }, props.children)
        // React.createElement("blockquote", { ...props, className: "border-l-4 border-main-700 pl-4 mb-4" + widthSettings }, props.children)
    ),


    em: (props: any) => (
        React.createElement("em", { ...props, className: "italic" }, props.children)
    ),
    strong: (props: any) => (
        React.createElement("strong", { ...props, className: "font-bold" }, props.children)
    ),
}



export async function getPostContentBySlug(slug: string, locale: Locale, category: Category): Promise<{ content: any }> {

    // check in all folders

    try {
        // get content and frontmatter (=metadata) for one article
        const { content } = await compileMDX<{ title: string }>({
            source: fs.readFileSync(
                path.join(process.cwd(), ...contentPath, category, slug, locale + ".mdx"), //add .mdx
                "utf8"
            ),
            options: { parseFrontmatter: true },
            components: components,
        });
        return { content }

    } catch (error) {
        null
        // process below
    }

    console.log("Error: Post not found: ", slug)
    return { content: null }
}

export function getBookBySlug(slug: string): Book | null {

    for (let book of books) {
        if (book.slug === slug) {
            return book
            // if (locale === "de") {
            //     return getPostWithGermanContent(book) as Book
            // }
            // else {
            //     return book
            // }
        }
    }
    return null;
}

export function getArticleBySlug(slug: string, locale: Locale = "en"): Article | null {

    for (let article of articles) {
        if (article.slug === slug) {

            return article

            // if (locale === "de") {
            //     return getPostWithGermanContent(article);
            // }
            // else {
            //     return article;
            // }
        }
    }
    return null;
}



export function getImagesForContent(category: Category, slug: string): any {

    // get all images in the folder
    const folderPath = path.join(process.cwd(), "public", contentFolder, category, slug);
    const filenames: string[] = fs.readdirSync(folderPath);

    // filter for images
    const images = filenames.filter((filename: string) => {
        const extension = filename.split(".").pop();
        return extension === "jpg" || extension === "png" || extension === "jpeg" || extension === "webp";
    });

    // return the images
    return images;
}


export function getImagePath(
    category: Category,
    slug: string,
    imagename: ImageType
) {

    try {
        const images: string[] = getImagesForContent(category, slug);

        // find the image with the given name, regardless of the image extension
        const imagenameWithExtension = images.find((image) => image.includes(imagename));
        return `/${contentFolder}/${category}/${slug}/${imagenameWithExtension}`;
    }
    catch (err) {
        console.log("No image found, using backup image instead");

        return backupImagePaths[category][imagename]
    }
}
