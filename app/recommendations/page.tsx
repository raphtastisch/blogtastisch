import RecommendationGrid from "@/components/recommendation/recommendationGrid";
import StyledH1 from "@/components/ui/styledH1";
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
      tags: ["health", "non-fiction", "science", "fitness"],
      slug: "outlive",
      date: new Date("2021-08-01"),
    },
    {
      title: "Aufklärung jetzt",
      subtitle: "Für Vernunft, Wissenschaft, Humanismus und Fortschritt",
      author: "Steven Pinker",
      slug: "aufklaerungjetzt",
      shortDescription:
        "Die Werte der Aufklärung sind der beste Quell für Fortschritt und Wohlbefinden.",
      longDescription:
        "Steven Pinker liefert mit „Aufklärung jetzt“ eine grandios geschriebene Darstellung, wieso die Werte der Aufklärung der beste Quell für Fortschritt und Wohlbefinden sind. Darum müssen wir diese Werte gerade jetzt, wo sie unter Dauerfeuer von allen Seiten stehen, eisern verteidigen.",
      date: new Date("2023-11-18 00:00:00"),
      tags: ["non-fiction", "politics", "philosophy"],
    },
    {
      title: "Superforecasting",
      subtitle: "Die Kunst der richtigen Prognose",
      author: "Philip E. Tetlock und Dan Gardner",
      slug: "superforecasting",
      shortDescription:
        "Wie gehen besere Prognosen und die Wissenschaft dahinter.",
      longDescription:
        "„Superforecasting: Die Kunst der richtigen Prognose“ von Philip E. Tetlock und Dan Gardner ist ein überaus interessantes Buch über die Wissenschaft der Vorhersage, wie man Vorhersagen verbessern kann und warum man keiner Vorhersage glauben sollte, wenn die Person dahinter nicht eine Liste all ihrer richtigen und falschen Vorhersagen aus der Vergangenheit bereitstellt.",
      date: new Date("2024-01-01 14:40:45"),
      tags: ["non-fiction", "softskill", "psychology"],
    },
    {
      title: "The Strategy of Denial",
      subtitle: "American Defense in an Age of Great Power Conflict",
      author: "Elbridge A. Colby",
      slug: "strategyofdenial",
      shortDescription:
        "Geostrategische Überlegungen aus US-amerikanischer Sicht mit Fokus auf China.",
      longDescription:
        "„The Strategy of Denial“ von Elbridge A. Colby bietet spannende Einblicke in das Thema globale Geostrategie und wie diese aus US-amerikanischer Sicht aussehen könnte. Der Fokus liegt dabei voll auf dem Machtkampf mit China - Europa ist dabei nur ein Nebendarsteller.",
      date: new Date("2023-12-07 00:00:00"),
      tags: ["non-fiction", "politics"],
    },
    {
      title: "Ein verheißenes Land",
      subtitle: "Teil 1 der Biografie des 44. Präsidenten der USA",
      author: "Barack Obama",
      slug: "verheissenesland",
      shortDescription: "Der erste Teil von Obamas spannender Autobiografie.",
      longDescription:
        "„Ein verheißenes Land“ ist der erste Teil von Barack Obamas Autobiographie. Es beschreibt seinen Werdegang zum mächtigsten Mann der Welt und gibt spannende Einblick in die schwierigsten und folgenreichsten Entscheidungen seiner ersten Amtszeit. Dabei wirft es ein spannendes Licht auf die Überlegungen, die hinter seinen weitreichendsten Handlungen stehen.",
      date: new Date("2023-12-01 00:00:00"),
      tags: ["biography", "non-fiction", "politics"],
    },
  ].sort((a, b) => b.date.getTime() - a.date.getTime());

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
    <div className="w-full flex flex-col items-center">
      <StyledH1 className="mb-8">Alle Buchempfehlungen!</StyledH1>
      <div className="w-full text-start">
        Die Tags helfen dir bei der Suche. Wähle einfach aus, was dich
        interessiert.
      </div>
      <RecommendationGrid books={booksWithImages} allTags={allTags} />
    </div>
  );
}
