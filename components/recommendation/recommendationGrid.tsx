"use client";

import Image from "next/image";
import { Book } from "@/lib/config";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Tag from "./tag";
import Link from "next/link";

export default function RecommendationGrid({
  books,
  allTags,
}: {
  books: Book[];
  allTags: string[];
}) {
  const [tags, setTags] = useState<string[]>([]);

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
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8 w-full pt-4 items-center">
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

        <div className="flex flex-wrap">
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
        </div>
      </div>
      <div className="h-1 bg-main-700 opacity-50 w-full my-4 rounded-full" />
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-8">
        {filteredBooks.map((book) => {
          const Wrapper = ({ children }: { children: JSX.Element }) => {
            return book.hasFullText ? (
              <Link href={"/books/" + book.slug}>{children}</Link>
            ) : (
              <div>{children}</div>
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
                    von &nbsp;<strong>{book.author}</strong>
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
