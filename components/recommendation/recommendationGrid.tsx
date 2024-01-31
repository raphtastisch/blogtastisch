"use client";

import Image from "next/image";
import { Book } from "@/lib/config";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Tag from "./tag";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

export default function RecommendationGrid({
  books,
  allTags,
}: {
  books: Book[];
  allTags: string[];
}) {
  const [tags, setTags] = useState<string[]>([]);

  const searchParams = useSearchParams(); // Extract the tag from the URL
  // console.log("searchParams", searchParams.getAll("tag"));

  useEffect(() => {
    const tagsFromUrl = searchParams.getAll("tag");
    if (tagsFromUrl.length > 0) {
      setTags(tagsFromUrl);
    }
  }, [searchParams]);

  //   const router = useRouter();
  // useEffect(() => {
  //   const queryParams = tags.length > 0 ? { tag: tags } : undefined;
  //   router.push({ query: queryParams }, undefined, { scroll: false });
  // }, [tags]);

  // used to display only those tags to the user, that are still linked with a book that is shown
  const availableTags: string[] = [];

  const filteredBooks: Book[] =
    tags.length === 0
      ? books
      : books.filter((book) => {
          const matchesTags =
            book.tags &&
            book.tags.length > 0 &&
            tags.every((tag) => book.tags!.includes(tag)); // all selected tags must be in the book tags
          //            book.tags.some((tag) => tags.includes(tag));

          if (matchesTags) {
            book.tags!.forEach((tag) => {
              if (!availableTags.includes(tag)) availableTags.push(tag);
            });
          }

          return matchesTags;
        });

  // const filterBooks = (books, searchTerm, selectedTags) => {
  //   return books.filter((book) => {
  //     const matchesSearchTerm =
  //       searchTerm === "" ||
  //       book.title.toLowerCase().includes(searchTerm.toLowerCase());
  //     const matchesTags =
  //       selectedTags.length === 0 ||
  //       selectedTags.some((tag) => book.tags.includes(tag));
  //     return matchesSearchTerm && matchesTags;
  //   });
  // };

  // console.log("availableTags", availableTags);

  const getRandomElement = (array: any[]) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-start space-y-2 md:space-y-0 md:flex-row md:space-x-8 w-full pt-4 md:items-center">
        <div className="min-w-44 h-fit cursor-pointer p-1 rounded bg-main-700 text-white font-semibold text-center">
          {tags.length > 0 ? (
            <div className="" onClick={() => setTags([])}>
              Entferne alle Tags
            </div>
          ) : (
            <div
              className=""
              onClick={() => setTags([getRandomElement(allTags)])}
            >
              Zufallsauswahl
            </div>
          )}
        </div>

        <div className="flex flex-wrap ">
          {allTags.map((tag) =>
            availableTags.length === 0 || availableTags.includes(tag) ? (
              <Tag
                key={tag}
                tag={tag}
                isActive={tags.includes(tag)}
                onClick={() => {
                  if (tags.includes(tag)) {
                    setTags(tags.filter((t) => t !== tag));
                  } else {
                    setTags([...tags, tag]);
                  }
                  return null;
                }}
              />
            ) : null
          )}
          {tags.length !== 0 && (
            <div
              onClick={() => setTags([])}
              className="cursor-pointer m-1 py-1 px-4 rounded-full select-none text-center text-xs font-semibold text-gray-500 bg-gray-300 whitespace-nowrap"
            >
              + {allTags.length - availableTags.length} ausgeblendete Tags
            </div>
          )}
        </div>
      </div>
      <div className="h-1 bg-main-700 opacity-50 w-full mt-4 mb-1 rounded-full" />
      <div className="text-main-700 text-xs md:text-sm text-right w-full mb-4">
        Ausgewählte Tags zeigen <strong>{filteredBooks.length}</strong> von{" "}
        <strong>{books.length}</strong> Empfehlungen
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-8">
        {filteredBooks.map((book) => {
          const Wrapper = ({ children }: { children: JSX.Element }) => {
            return book.hasFullText ? (
              <Link href={"/books/" + book.slug}>{children}</Link>
            ) : (
              <Link
                target="_blank"
                href={`https://www.amazon.de/s?k=${book.title.replace(
                  " ",
                  "+"
                )}&i=audible&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1Y539SCFIVZKF&sprefix=alignment+prob%2Caudible%2C286&linkCode=ll2&tag=raphaelfritz-21&linkId=11b8f9eddf91a807e78d59cdb6ea22b5&language=de_DE&ref_=as_li_ss_tl`}
              >
                {children}
              </Link>
            );
          };

          return (
            <Wrapper key={book.slug}>
              <div className="flex flex-row sm:p-4">
                <div>
                  <div className="relative min-w-48 w-48 h-72">
                    <Image
                      src={book.imagePath!}
                      alt="Book"
                      fill={true}
                      sizes={"20vw"}
                      style={{ objectFit: "contain", objectPosition: "center" }}
                      className=""
                    ></Image>
                  </div>
                  {book.hasFullText && (
                    <div className="bg-main-700 mt-2 w-full text-center text-white font-semibold">
                      Full review!
                    </div>
                  )}
                </div>

                <div className="flex flex-col pl-4">
                  <div className=" text-main-700  italic">
                    {book.subtitle ? (
                      <>{book.subtitle}</>
                    ) : (
                      <>{book.shortDescription}</>
                    )}
                  </div>
                  <div className="mt-1 text-main-700 font-semibold text-xl sm:text-2xl md:text-3xl">
                    {book.title}
                  </div>

                  <div className=" mt-2">{book.longDescription}</div>
                  <div className="mt-1  text-right text-main-700">
                    by&nbsp;<strong>{book.author}</strong>
                  </div>
                  {book.tags && (
                    <div className="flex flex-wrap mt-4">
                      {book.tags.map((tag: string) => (
                        <Tag
                          key={tag}
                          tag={tag}
                          isActive={tags.includes(tag)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
}
