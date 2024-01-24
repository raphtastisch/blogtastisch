"use client";

import Image from "next/image";
import { Book } from "@/lib/config";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Tag from "./tag";

export default function RecommendationGrid({
  books,
  allTags,
}: {
  books: Book[];
  allTags: string[];
}) {
  const [tags, setTags] = useState<string[]>([]);

  const filteredBooks: Book[] =
    tags.length === 0
      ? books
      : books.filter((book) => {
          const matchesTags =
            book.tags &&
            book.tags.length > 0 &&
            tags.every((tag) => book.tags!.includes(tag)); // all selected tags must be in the book tags
          //            book.tags.some((tag) => tags.includes(tag));
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

  return (
    <div className="w-sm sm:w-full">
      <div className="flex flex-row space-x-8 w-full pt-4 items-center">
        <div className="min-w-40 h-fit cursor-pointer p-1 rounded bg-main-700 text-white font-semibold text-center">
          {tags.length > 0 ? (
            <div className="" onClick={() => setTags([])}>
              Remove all Tags
            </div>
          ) : (
            <div className="" onClick={() => setTags(allTags)}>
              Select all Tags
            </div>
          )}
        </div>

        <div className="flex flex-wrap">
          {allTags.map((tag) => (
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
          ))}
        </div>
      </div>
      <div className="h-1 bg-main-700 opacity-50 w-full my-4 rounded-full" />
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-8">
        {filteredBooks.map((book) => {
          return (
            <div className="flex flex-row p-4" key={book.slug}>
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
              <div className="flex flex-col pl-4">
                <div className="text-md text-main-700  italic">
                  {book.subtitle ? (
                    <>{book.subtitle}</>
                  ) : (
                    <>{book.shortDescription}</>
                  )}
                </div>
                <div className="mt-1 text-main-700 font-semibold text-3xl">
                  {book.title}
                </div>

                <div className="text-md mt-2">{book.longDescription}</div>
                <div className="mt-1 text-md text-right text-main-700">
                  by&nbsp;<strong>{book.author}</strong>
                </div>
                {book.tags && (
                  <div className="flex flex-wrap mt-4">
                    {book.tags.map((tag: string) => (
                      <Tag key={tag} tag={tag} isActive={tags.includes(tag)} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
