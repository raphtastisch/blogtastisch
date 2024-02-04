import { Article } from "./config";
import { getPostWithGermanContent } from "./utils";

export const articles: Article[] = [{

    titleDE: "Wie ich meine Zeichenskills mit ChatGPT gehackt habe",
    shortDescriptionDE: "Wie man ChatGPT verwendet, um seine Zeichenfähigkeiten zu hacken und sie drastisch zu verbessern.",
    longDescriptionDE: "Eine Geschichte über Geschenke, unzureichende Zeichenfähigkeiten und wie ChatGPT zur Rettung eilt. Dieser Artikel verrät, wie du deine künstlerischen Fähigkeiten schnell verbessern kannst - falls du das jemals für kleine Geschenke oder andere nette Taten benötigst.",
    title: "How I used ChatGPT to hack my drawing skills",
    writtenBy: "Raphael Fritz",
    slug: "drawgpt",
    shortDescription: "How to use ChatGPT to hack your drawing skills and drastically improve them.",
    longDescription: "A story about gifts, inadequate drawing skills and ChatGPT coming to the rescue. This article tells you how to quickly improve your artistic capabilities - in case you'll ever need them for little gifts or other nice deeds.",
    date: new Date("2024-01-14 00:00:00"),
}
]




export function getArticlesWithGermanContent(): Article[] {

    // replaces the content with german content if avialable
    return articles.map((article) => getPostWithGermanContent(article) as Article)

}

export function getArticleBySlug(slug: string, locale: string = "en"): Article | null {

    for (let article of articles) {
        if (article.slug === slug) {
            if (locale === "de") {
                return getPostWithGermanContent(article);
            }
            else {
                return article;
            }
        }
    }
    return null;
}





