import Image from "next/image";
import {
  getPostContentBySlug,
  getImagePath,
  getBookBySlug,
} from "@/lib/getPosts";
import InPostImage from "@/components/ui/inPostImage";
import StyledLink from "@/components/ui/styledLink";
import StyledBlockquote from "@/components/ui/styledBlockquote";
import StyledH1 from "@/components/ui/styledH1";
import StyledH2 from "@/components/ui/styledH2";
import { Link } from "@/navigation";
import { books, createAmazonLink } from "@/lib/content/books";
import { dateToString } from "@/lib/utils";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import PostContent from "@/components/postContent";
import { Category, Locale } from "@/lib/config";

export function generateStaticParams() {
  return books.map((book) => ({
    params: { slug: book.slug },
  }));
}

export async function generateMetadata({
  params: { slug, locale },
}: {
  params: { slug: string; locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "Navbar" });

  const book = getBookBySlug(slug);

  return {
    title: book ? book[locale]!.title : t("reviews"),
  };
}

export default function Home({
  params: { slug, locale },
}: {
  params: { slug: string; locale: Locale };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Reviews");
  //  const t = await getTranslations("Reviews");
  // slug because that is the name of the [folder]
  // const slug = params.slug;

  // const { content, frontmatter, category } = await getPostBySlug(slug, locale);

  // if (!content || !category) {
  //   return <div>404 no data found</div>;
  // }

  const book = getBookBySlug(slug);
  if (!book || !book[locale]) {
    return <div>404 no metadata found or locales is missing: {locale}</div>;
  }

  const category: Category = "books"; // get from path?
  const illustrationImagePath = getImagePath(category, slug, "illustration");
  const coverImagePath = getImagePath(category, slug, "cover");

  return (
    <div className="mdx flex flex-col items-center  w-full">
      <div className="md:w-md flex flex-col">
        <div className="text-main-700 mt-4 text-sm md:text-base ml-auto">
          {book.releaseDate ? <>{dateToString(book.releaseDate)}</> : null}
        </div>

        <StyledH1 className="text-center">{book[locale]!.title}</StyledH1>

        {book[locale]!.subtitle && book[locale]!.subtitle !== "" ? (
          <StyledH2 className="text-center mt-2">
            {book[locale]!.subtitle}
          </StyledH2>
        ) : null}

        <div className="mt-2 flex w-full justify-end text-main-700">
          {t("by")}&nbsp;<strong>{book.author}</strong>
        </div>

        {book[locale]!.longDescription &&
        book[locale]!.longDescription !== "" ? (
          <StyledBlockquote className="mt-8">
            {book[locale]!.longDescription}
          </StyledBlockquote>
        ) : null}
      </div>

      <InPostImage src={illustrationImagePath} priority={true} />

      <div className="flex flex-col items-center w-full">
        {/* {content} */}
        <PostContent slug={slug} locale={locale} category={category} />
      </div>

      {/* Footer */}
      {book.initialReleaseUrl && book.initialReleaseName ? (
        <div className="mt-8 lg:w-md ">
          {t("originallyPublished")}
          <StyledLink href={book.initialReleaseUrl}>
            {book.initialReleaseName}
          </StyledLink>
        </div>
      ) : null}

      <Link
        href={
          book.amazonLink
            ? book.amazonLink
            : createAmazonLink(book[locale]!.title)
        }
        target="_blank"
        className="p-8"
      >
        <div className="flex flex-col items-center space-y-4  mt-8">
          <div className="button  px-4 py-2 rounded-lg text-md sm:text-lg ">
            {t("available")}
          </div>
          <div className="relative h-illustration w-xs overflow-hidden rounded-xl">
            <Image
              src={coverImagePath}
              alt={book[locale]!.title + " Cover"}
              className=""
              // width={300}
              // height={500}
              fill={true}
              sizes="(max-size-768px):70vw (max-size-1024px):50vw 33vw"
              style={{
                width: "100%",
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </div>
          <div className="italic text-main-700">
            {t("releasedAt")}: {dateToString(book.date)}
          </div>
        </div>
      </Link>
    </div>
  );
}
