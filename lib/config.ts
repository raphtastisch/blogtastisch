
export type Category = 'books' | 'articles';
export const categories: Category[] = ["books", "articles"];

export type ImageType = 'illustration' | 'cover';


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