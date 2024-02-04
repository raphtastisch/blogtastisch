import { Link } from "@/navigation";
import Image from "next/image";
import { shuffleArray } from "@/lib/utils";
import { getImagePath } from "@/lib/getPosts";
import { getTranslations } from "next-intl/server";

export default async function InfiniteSlider() {
  const exampleCovers: string[] = shuffleArray([
    "promised-land",
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
    "enlightenment-now",
    "beginning-infinity",
    "unsere-gene",
    "sooley",
    "achtsam-morden",
    "animal-farm",
  ]);

  const t = await getTranslations("Home");

  const exampleCoversPath: string[] = await Promise.all(
    exampleCovers.map(
      async (pathname) => await getImagePath("books", pathname, "cover")
    )
  );

  {
    /* <div className="flex flex-col items-center justify-center w-screen overflow-hidden shadow-xl">
  <div className="flex flex-row justify-center animate-slideRightToLeftBounce"></div> */
  }

  const images = (
    <>
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
    </>
  );

  return (
    <>
      <Link
        href="/recommendations"
        className="relative flex flex-col items-center"
      >
        <div className="flex flex-col items-start justify-start w-screen overflow-hidden shadow-xl  ">
          <div className="flex flex-row justify-center animate-slideRightToLeft">
            {images}
            {images}
          </div>
        </div>

        <div className="flex flex-row items-center py-2 sm:py-4 px-4 sm:px-8  absolute top-16 md:top-16 text-xl md:text-2xl rounded-lg button">
          {t("allRecommendations")}
        </div>
      </Link>
    </>
  );
}
