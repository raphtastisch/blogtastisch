import { getPostBySlug, getImagePath } from "@/lib/getPosts";
import InPostImage from "@/components/ui/inPostImage";
import StyledBlockquote from "@/components/ui/styledBlockquote";
import StyledH1 from "@/components/ui/styledH1";
import StyledH2 from "@/components/ui/styledH2";

import { articles, getArticleBySlug } from "@/lib/articles";
import { dateToString } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Category } from "@/lib/config";
import PostContent from "@/components/postContent";

// not sure if actually working
export function generateStaticParams() {
  // const data = await getAllPosts();

  //   console.log("dynamicpath data", data);

  // return data.map((content: any, frontmatter: any, category: any) => ({
  //   params: { books: frontmatter.slug },
  // }));

  return articles.map((article) => ({
    params: { slug: article.slug },
  }));
}

export default function Home({ params: { slug, locale } }: any) {
  unstable_setRequestLocale(locale);
  // const t = await getTranslations("Articles");
  const t = useTranslations("Reviews");

  const article = getArticleBySlug(slug, locale);
  if (!article) {
    return <div>404 no metadata found</div>;
  }

  const category: Category = "articles";
  const illustrationImagePath = getImagePath(category, slug, "illustration");

  return (
    <div className="mdx flex flex-col items-center w-full">
      <div className="md:w-md flex flex-col">
        <div className="text-main-700 mt-4 text-sm md:text-base ml-auto">
          {dateToString(article.date)}
        </div>

        <StyledH1 className="text-center">{article.title}</StyledH1>

        {article.subtitle && article.subtitle !== "" ? (
          <StyledH2 className="text-center mt-2">{article.subtitle}</StyledH2>
        ) : null}

        <div className="mt-2 flex w-full justify-end text-main-700">
          {t("by")}&nbsp;<strong>{article.writtenBy}</strong>
        </div>

        {article.longDescription && article.longDescription !== "" ? (
          <StyledBlockquote className="mt-8">
            {article.longDescription}
          </StyledBlockquote>
        ) : null}
      </div>

      <InPostImage src={illustrationImagePath} priority={true} />

      {/* Content */}
      <div className="flex flex-col items-center w-full">
        {/* {content} */}
        <PostContent slug={slug} locale={locale} category={category} />
      </div>
    </div>
  );
}
