import InPostImage from "@/components/ui/inPostImage";
import OverviewGrid from "@/components/postOverview/overviewGrid";
import StyledH1 from "@/components/ui/styledH1";
import StyledH2 from "@/components/ui/styledH2";
import { getImagePath } from "@/lib/getPosts";
import Image from "next/image";
import Link from "next/link";
import { cn, shuffleArray } from "@/lib/utils";
import { books, checkTags, fullNameTags } from "@/lib/books";
import Tag from "@/components/recommendation/tag";

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
    "unsere-gene",
    "sooley",
    "achtsam-morden",
    "animal-farm",
  ]);

  const exampleCoversPath: string[] = await Promise.all(
    exampleCovers.map(
      async (pathname) => await getImagePath("books", pathname, "cover")
    )
  );

  // checks if all tags have correct full names set
  checkTags();

  // shuffle the key of tags
  const exampleKeys = shuffleArray(Object.keys(fullNameTags));

  return (
    <div className="flex flex-col items-center space-y-8 md:space-y-16 ">
      {/*
      w-sm lg:w-lg xl:w-xl

      <StyledH1 className="mb-0 mt-0">Willkommen! Genieß es.</StyledH1> */}
      <div className=" flex flex-col space-y-4 items-start sm:items-center mt-8">
        <StyledH1 className="w-full text-center px-4 ">
          Du brauchst eine Buchempfehlung?
        </StyledH1>

        <div className="flex flex-wrap px-4 items-center justify-center">
          {/* <div className="py-1 pl-2 xs:pl-4 m-1">Lust auf </div> */}
          {exampleKeys.slice(0, 7).map((key, index) => (
            <Link key={index} href={`/recommendations?tag=${key}`}>
              <div className="button shadow-lg my-1 mx-1 xs:mx-2 py-1 px-2 xs:px-4 rounded select-none text-center font-semibold">
                {fullNameTags[key]}
              </div>
            </Link>
          ))}
          {/* <div className="button m-1 py-1 px-2 xs:px-4 rounded select-none text-center font-semibold">
            Und viele mehr!
          </div> */}
        </div>

        <Link
          href="/recommendations"
          className="relative flex flex-col items-center"
        >
          {/* <div>
            Finde dein nächstes Lieblingsbuch mit interaktiven Empfehlungen!
          </div> */}
          <div className="flex flex-col items-center justify-center w-screen overflow-hidden shadow-xl">
            <div className="flex flex-row justify-center ">
              {exampleCoversPath.map((path, index) => (
                <div
                  key={index}
                  className="relative h-52 w-36 flex-shrink-0 select-none "
                >
                  <Image
                    src={path}
                    alt="Cover"
                    fill={true}
                    sizes="(max-width: 480px) 33vw, (max-width: 768px) 20vw, 10vw"
                    // sizes={"10vw"}
                    className="select-none"
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            className={cn(
              " flex flex-row items-center  py-2 sm:py-4 px-4 sm:px-8  absolute top-16 md:top-16  shadow-xl text-xl md:text-2xl rounded-lg button  ",
              "hover:bg-opacity-100"
            )}
          >
            Und viele mehr!
          </div>
        </Link>
      </div>
      <div className="px-4 w-full pt-4  ">
        <div className="h-1 bg-main-700 opacity-50 w-full rounded-full" />
      </div>
      <div className="flex flex-col space-y-4 sm:space-y-8 items-center px-4">
        <StyledH1 className="mt-0 md:mt-0 text-center ">
          Ausführliche Rezensionen und Artikel
        </StyledH1>
        <OverviewGrid />
      </div>
    </div>
  );
}
