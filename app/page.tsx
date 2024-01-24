import InPostImage from "@/components/ui/inPostImage";
import OverviewGrid from "@/components/postOverview/overviewGrid";
import StyledH1 from "@/components/ui/styledH1";
import StyledH2 from "@/components/ui/styledH2";
import { getImagePath } from "@/lib/getPosts";
import Image from "next/image";
import Link from "next/link";

// just to make the ordering of books on the home page different every time
function shuffleArray<T>(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap array[i] with array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default async function Home() {
  const exampleCovers: string[] = shuffleArray([
    "verheissenesland",
    "atomic-habits",
    "why-we-sleep",
    "sapiens",
    "immune",
    "righteous-mind",
    "mans-search-for-meaning",
    "poor-economics",
    "moral-landscape",
    "getting-things-done",
    "atomic-awakening",
    "start-with-why",
    "art-of-thinking-clearly",
    "antifragile",
    "rationality",
    "selfish-gene",
    "option-b",
    "phoenix-project",
    "superforecasting",
    "aufklaerungjetzt",
    "beginning-infinity",
  ]);

  const exampleCoversPath: string[] = await Promise.all(
    exampleCovers.map(
      async (pathname) => await getImagePath("books", pathname, "cover")
    )
  );

  return (
    <div className="flex flex-col items-center space-y-16 w-sm lg:w-lg xl:w-xl">
      {/* <StyledH1 className="mb-0 mt-0">Willkommen! Genieß es.</StyledH1> */}
      <div className="flex flex-col space-y-8 items-center">
        <StyledH1 className="">Buchempfehlungen</StyledH1>
        <Link href="/recommendations">
          <div className="flex flex-col items-center justify-center">
            {/* <div className=" shadow-2xl border-main-700 border-4 rounded-xl text-center p-8 bg-white font-semibold text-main-700 text-3xl md:text-4xl absolute z-10">
            Zu den Buchempfehlungen
          </div> */}

            <div className="flex flex-row justify-center">
              {exampleCoversPath.map((path, index) => (
                <div key={index} className="relative h-52 w-36 flex-shrink-0 ">
                  <Image
                    src={path}
                    alt="Cover"
                    fill={true}
                    sizes={"10vw"}
                    className=""
                  />
                </div>
              ))}
            </div>
          </div>
        </Link>
      </div>
      <div className="h-1 bg-main-700 opacity-50 w-full rounded-full" />

      <div className="flex flex-col space-y-8 items-center">
        <StyledH1 className="mt-0 md:mt-0">Ausführliche Rezensionen und Artikel</StyledH1>
        <OverviewGrid />
      </div>
    </div>
  );
}
