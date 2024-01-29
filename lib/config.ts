
export type Category = 'books' | 'articles';
export const categories: Category[] = ["books", "articles"];

export type ImageType = 'illustration' | 'cover';


export interface Book {
    title: string;
    subtitle?: string;
    author: string;
    slug: string;
    shortDescription: string;
    longDescription?: string;
    hasFullText?:boolean;
    date: Date;
    tags?: string[];
    initialReleaseUrl?: string;
    initialReleaseName?: string;
    imagePath?:string;
}

export const contentFolder = "data";

export const contentPath = ["public", "data"] // is linked to gether, no different paths!


export const backupImagePaths = {
    books: {
        illustration: "/backup/bookIllustration.png",
        cover: "/backup/bookCover.jpg"
    },
    articles: {
        illustration: "/backup/articleIllustration.png",
        cover: "/backup/articleCover.jpg"
    }
}