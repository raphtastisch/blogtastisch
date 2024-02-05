import Image from "next/image";
import { getPostBySlug, getImagePath } from "@/lib/getPosts";
import InPostImage from "@/components/ui/inPostImage";
import StyledLink from "@/components/ui/styledLink";
import StyledBlockquote from "@/components/ui/styledBlockquote";
import StyledH1 from "@/components/ui/styledH1";
import StyledH2 from "@/components/ui/styledH2";
import { Link } from "@/navigation";
import { books, createAmazonLink, getBookBySlug } from "@/lib/books";
import { dateToString } from "@/lib/utils";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import PostContent from "@/components/postContent";
import { Category } from "@/lib/config";

// not sure if actually working
export function generateStaticParams() {
  // const data = await getAllPosts();

  // //   console.log("dynamicpath data", data);

  // return data.map((frontmatter: any) => ({
  //   params: { slug: frontmatter.slug },
  // }));

  return books.map((book) => ({
    params: { slug: book.slug },
  }));
}

export default function Home({ params: { slug, locale } }: any) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Reviews");
  //  const t = await getTranslations("Reviews");
  // slug because that is the name of the [folder]
  // const slug = params.slug;

  // const { content, frontmatter, category } = await getPostBySlug(slug, locale);

  // if (!content || !category) {
  //   return <div>404 no data found</div>;
  // }

  const category: Category = "books"; // get from path?

  const book = getBookBySlug(slug, locale);
  if (!book) {
    return <div>404 no metadata found</div>;
  }

  const illustrationImagePath = getImagePath(category, slug, "illustration");

  const coverImagePath = getImagePath(category, slug, "cover");

  // console.log("book", book);

  return (
    <div className="mdx flex flex-col items-center  w-full">
      <div className="md:w-md flex flex-col">
        <div className="text-main-700 mt-4 text-sm md:text-base ml-auto">
          {book.releaseDate ? <>{dateToString(book.releaseDate)}</> : null}
        </div>

        <StyledH1 className="text-center">{book.title}</StyledH1>

        {book.subtitle && book.subtitle !== "" ? (
          <StyledH2 className="text-center mt-2">{book.subtitle}</StyledH2>
        ) : null}

        <div className="mt-2 flex w-full justify-end text-main-700">
          {t("by")}&nbsp;<strong>{book.author}</strong>
        </div>

        {book.longDescription && book.longDescription !== "" ? (
          <StyledBlockquote className="mt-8">
            {book.longDescription}
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
        href={book.amazonLink ? book.amazonLink : createAmazonLink(book.title)}
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
              alt={book.title + " Cover"}
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
