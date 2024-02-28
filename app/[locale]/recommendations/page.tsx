import RecommendationGrid from "@/components/recommendation/recommendationGrid";
import StyledH1 from "@/components/ui/styledH1";
import { Book, Locale } from "@/lib/config";
import { getImagePath } from "@/lib/getPosts";
import { books } from "@/lib/content/books";
import { shuffleArray } from "@/lib/utils";
import StyledLink from "@/components/ui/styledLink";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "Navbar" });

  return {
    title: t("recommendations"),
  };
}

export default function Home({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Recommendations");
  // const t = await getTranslations("Recommendations");

  //iterate over all books and add "imagePath" to each book
  const allTags: string[] = [];
  const booksWithImages = books.map((book) => {
    // get the image path
    const imagePath = getImagePath("books", book.slug, "cover");

    // add all tags to the set
    if (book.tags) {
      book.tags.forEach((tag) => {
        if (!allTags.includes(tag)) allTags.push(tag);
      });
    }

    return { ...book, imagePath: imagePath };
  });

  const shuffledBookData: Book[] = shuffleArray(booksWithImages);

  return (
    <div className="w-full flex flex-col items-center px-4">
      <StyledH1 className="mb-2 md:mb-4">{t("title")}</StyledH1>
      <div className="ml-0 md:ml-8 w-full">
        <div className=" w-full text-start text-md md:text-lg">
          {t("usageInfo")}
        </div>
      </div>

      <RecommendationGrid books={shuffledBookData} allTags={allTags} />

      <div className="h-1 bg-main-700 opacity-50 w-full mt-16 rounded-full" />
      <div className="text-main-700 mt-8 ">
        {/* {t("recommendToMe")} */}

        {t.rich("recommendToMe", {
          strong: (chunks) => <strong>{chunks}</strong>,
        })}

        {/* Ich freu mich selbst auch immer über <strong>Buchempfehlungen</strong> -
        schreib mir deine Tipps am Besten einfach auf{" "} */}
        <StyledLink
          href="https://www.linkedin.com/in/raphael-fritz/"
          target="_blank"
        >
          LinkedIn
        </StyledLink>
      </div>
    </div>
  );
}
