import {
  getPostContentBySlug,
  getImagePath,
  getArticleBySlug,
} from "@/lib/getPosts";
import InPostImage from "@/components/ui/inPostImage";
import StyledBlockquote from "@/components/ui/styledBlockquote";
import StyledH1 from "@/components/ui/styledH1";
import StyledH2 from "@/components/ui/styledH2";

import { articles } from "@/lib/content/articles";
import { dateToString } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Category, Locale } from "@/lib/config";
import PostContent from "@/components/postContent";

export function generateStaticParams() {
  return articles.map((article) => ({
    params: { slug: article.slug },
  }));
}

export async function generateMetadata({
  params: { slug, locale },
}: {
  params: { slug: string; locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "Navbar" });

  const post = getArticleBySlug(slug, locale);

  return {
    title: post ? post[locale]!.title : t("articles"),
  };
}

export default function Home({
  params: { slug, locale },
}: {
  params: { slug: string; locale: Locale };
}) {
  unstable_setRequestLocale(locale);
  // const t = await getTranslations("Articles");
  const t = useTranslations("Reviews");

  const category: Category = "articles";
  const illustrationImagePath = getImagePath(category, slug, "illustration");

  const article = getArticleBySlug(slug, locale);
  if (!article || !article[locale]) {
    return <div>404 no metadata found or locales is missing: {locale}</div>;
  } else {
    return (
      <div className="mdx flex flex-col items-center w-full">
        <div className="md:w-md flex flex-col">
          <div className="text-main-700 mt-4 text-sm md:text-base ml-auto">
            {dateToString(article.date)}
          </div>

          <StyledH1 className="text-center">{article[locale]!.title}</StyledH1>

          {article[locale]!.subtitle && article[locale]!.subtitle !== "" ? (
            <StyledH2 className="text-center mt-2">
              {article[locale]!.subtitle}
            </StyledH2>
          ) : null}

          <div className="mt-2 flex w-full justify-end text-main-700">
            {t("by")}&nbsp;<strong>{article.writtenBy}</strong>
          </div>

          {article[locale]!.longDescription &&
          article[locale]!.longDescription !== "" ? (
            <StyledBlockquote className="mt-8">
              {article[locale]!.longDescription}
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
}
