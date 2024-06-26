import { cn } from "@/lib/utils";
import Image from "next/image";
import { Link } from "@/navigation";

import { useTranslations } from "next-intl";

export default function OverviewElement({
  data,
  isBig,
}: {
  isBig?: boolean;
  data: {
    title: string;
    subtitle: string | null;
    href: string;
    illustrationImagePath: string;
    shortDescription: string | null;
    longDescription: string | null;
    category: string;
    date: string;
    author: string;
  };
}) {
  isBig = isBig || false;

  const t = useTranslations("OverviewGrid");

  return (
    <div
      className={cn(
        isBig
          ? "col-span-1 lg:col-span-6 lg:row-span-2"
          : "col-span-1 lg:col-span-4 lg:row-span-1"
      )}
    >
      <Link href={data.href}>
        <div
          className={cn(
            "relative",
            "w-full overflow-hidden rounded-xl shadow-xl"
          )}
        >
          <div
            className={cn(
              "transition-transform duration-500 ease-in-out transform hover:scale-110",
              "relative",
              isBig ? "h-80 xl:h-illustration" : "h-80 lg:h-40 xl:h-56"
              // "[&>img]:object-cover [&>img]:object-center "
            )}
          >
            <Image
              src={data.illustrationImagePath}
              alt="The illustration for this book"
              fill={true}
              sizes={"(max-width:992px):100vw " + isBig ? "60vw" : "40vw"}
              className="object-cover object-center"
            />
          </div>
          <div className="absolute bottom-2 right-2 bg-black py-0.5 px-2 text-white w-fit h-fit rounded-lg">
            {`${new Date(data.date).getDate().toString().padStart(2, "0")}.${(
              new Date(data.date).getMonth() + 1
            )
              .toString()
              .padStart(2, "0")}.${new Date(data.date).getFullYear()}`}
          </div>
          <div className="absolute inset-2 bg-gradient-to-r from-main-600 to-main-700 py-0.5 px-2 text-white w-fit h-fit rounded-lg font-semibold ">
            {data.category === "books" ? (
              <>{t("booklabel")}</>
            ) : (
              <>{t("articlelabel")}</>
            )}
          </div>
        </div>
        <div className="mt-1 p-1 rounded-sm">
          {data.subtitle ? (
            <div
              className={cn(
                "italic text-main-700",
                isBig ? "lg:text-lg" : "md:text-base"
              )}
            >
              {data.subtitle}
            </div>
          ) : null}
          <div
            className={cn(
              "font-semibold text-main-700 text-xl",
              isBig
                ? "text-xl md:text-2xl lg:text-3xl"
                : "text-xl md:text-2xl lg:text-2xl"
            )}
          >
            {data.title}
          </div>

          {data.longDescription && isBig ? (
            <div className="mt-2 ">{data.longDescription}</div>
          ) : (
            <div className="mt-2 lg:hidden">{data.longDescription}</div>
          )}
        </div>
        <div
          className={cn(
            "text-main-700 ",
            isBig ? "text-right" : "text-right lg:text-left lg:text-sm  "
          )}
        >
          {t("by")} <strong>{data.author}</strong>
        </div>
      </Link>
    </div>
  );
}
