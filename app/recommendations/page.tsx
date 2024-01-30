import RecommendationGrid from "@/components/recommendation/recommendationGrid";
import StyledH1 from "@/components/ui/styledH1";
import { Book } from "@/lib/config";
import { getImagePath } from "@/lib/getPosts";
import { books } from "@/lib/books";
import { shuffleArray } from "@/lib/utils";
import StyledLink from "@/components/ui/styledLink";

export default async function Home() {
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
  const shuffledBookData: Book[] = shuffleArray(booksWithImages);

  return (
    <div className="w-full flex flex-col items-center px-4">
      <StyledH1 className="mb-2 md:mb-4">Alle Buchempfehlungen!</StyledH1>
      <div className="w-full text-start text-md md:text-lg">
        Die Tags helfen dir bei der Suche. Wähle einfach aus, was dich
        interessiert.
      </div>
      <RecommendationGrid books={shuffledBookData} allTags={allTags} />
      <div className="h-1 bg-main-700 opacity-50 w-full mt-16 rounded-full" />
      <div className="text-main-700 mt-8 ">
        Ich freu mich selbst auch immer über <strong>Buchempfehlungen</strong> -
        schreib mir deine Tipps am Besten einfach auf{" "}
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
