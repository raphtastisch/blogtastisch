import RecommendationGrid from "@/components/recommendation/recommendationGrid";
import StyledH1 from "@/components/ui/styledH1";
import { Book } from "@/lib/config";
import { getImagePath } from "@/lib/getPosts";
import Image from "next/image";
import {books} from "@/lib/books";

export default async function Home() {
 
  //.sort((a, b) => b.date.getTime() - a.date.getTime());

  //iterate over all books and add "imagePath" to each book

  const allTags: string[] = [];
  const booksWithImages = await Promise.all(
    books.map(async (book) => {
      // get the image path
      const imagePath = await getImagePath("books", book.slug, "cover");

      // add all tags to the set
      if (book.tags) {
        book.tags.forEach((tag) => {
          if (!allTags.includes(tag)) allTags.push(tag);
        });
      }

      return { ...book, imagePath: imagePath };
    })
  );

  return (
    <div className="w-full flex flex-col items-center lg:w-lg xl:w-full">
      <StyledH1 className="mb-8">Alle Buchempfehlungen!</StyledH1>
      <div className="w-full text-start">
        Die Tags helfen dir bei der Suche. Wähle einfach aus, was dich
        interessiert.
      </div>
      <RecommendationGrid books={booksWithImages} allTags={allTags} />
    </div>
  );
}