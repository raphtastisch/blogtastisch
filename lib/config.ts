
export type Category = 'books' | 'articles';
export const categories: Category[] = ["books", "articles"];

export type ImageType = 'illustration' | 'cover';


export interface Content {
    title?: string;
    subtitle?: string;
    shortDescription?: string;
    longDescription?: string;
    iLike?: string;
}

export interface Post {
    slug: string;
    date: Date;
    writtenBy?: string;
    category?: Category;

    // title?: string;
    // subtitle?: string;
    // shortDescription?: string;
    // longDescription?: string;

    // titleDE?: string;
    // subtitleDE?: string;
    // shortDescriptionDE?: string;
    // longDescriptionDE?: string;

    de?: Content;
    en?: Content;
}

export interface Book extends Post {
    author: string;
    tags: string[];
    // iLike?: string;
    onlyEnglish?: boolean;
    hasFullText?: boolean;
    releaseDate?: Date;
    initialReleaseUrl?: string;
    initialReleaseName?: string;
    imagePath?: string;
    amazonLink?: string;

}

export interface Article extends Post {
   // nothing needed so far
}

export const defaultWrittenBy = "Raphael Fritz";
export const contentFolder = "data";
export const contentPath = ["public", "data"] // is linked to gether, no different paths!


export const backupImagePaths = {
    books: {
        illustration: "/backup/bookIllustration.png",
        cover: "/backup/bookCover.png"
    },
    articles: {
        illustration: "/backup/articleIllustration.png",
        cover: "/backup/articleCover.png"
    }
}

export type Locale = 'en' | 'de'
export const locales: Locale[] = ['en', 'de'];

export const languageMapping: Record<string, string> = { "en": "en_US", "de": "de_DE" };
