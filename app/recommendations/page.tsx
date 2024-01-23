import { Book } from "@/lib/config";
import { getImagePath } from "@/lib/getPosts";
import Image from "next/image";

export default async function Home() {
  const books: Book[] = [
    {
      title: "Outlive",
      subtitle:
        "How to live longer, feel better, and stay alive until the breakthroughs arrive.",
      author: "Peter Attia",
      shortDescription: "A book about health, prevention and logevity.",
      longDescription:
        "What you can do now to drastically increase the chance of living longer and healthier. I liked the actionable, science backed insights. Boils down what you can influence and what you can't (yet). Prevention is key, there is no wonderdrug.",
      tags: ["health", "non-fiction", "science", "longevity", "fitness"],
      slug: "outlive",
      date: new Date("2021-08-01"),
    },
  ];

  //iterate over all books and add "imagePath" to each book

  const booksWithImages = await Promise.all(
    books.map(async (book) => {
      const imagePath = await getImagePath("books", book.slug, "cover");
      return { ...book, imagePath: imagePath };
    })
  );

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

  const bookElements: any[] = booksWithImages.map((book) => {
    return (
      <div className="flex flex-row bg-blue-500" key={book.slug}>
        <div className=" relative w-48 h-60">
          <Image
            src={book.imagePath}
            alt="Outlive Cover"
            fill={true}
            sizes={"50vw"}
            style={{ objectFit: "contain", objectPosition: "center" }}
          ></Image>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="text-2xl">{book.title}</div>
          <div className="text-xl">{book.subtitle}</div>
          <div className="text-lg">{book.author}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {...bookElements}
      {...bookElements}
      {...bookElements}
      {...bookElements}
    </div>
  );
}
