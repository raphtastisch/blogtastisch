import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function OverviewElement({
  data,
  isBig,
}: {
  isBig?: boolean;
  data: {
    title: string;
    titleSub: string | null;
    href: string;
    illustrationImagePath: string;
    description: string | null;
    category: string;
    date: string;
    autor: string;
  };
}) {
  isBig = isBig || false;

  return (
    <div
      className={cn(
        "w-full",
        isBig
          ? "col-span-1 lg:col-span-6 lg:row-span-2"
          : "col-span-1 lg:col-span-4 lg:row-span-1"
      )}
    >
      <Link href={data.href}>
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-xl shadow-xl",
            isBig ? "h-72 lg:h-96 xl:h-illustration" : "h-72 lg:h-40 xl:h-56"
          )}
        >
          <div className="relative h-full transition-transform duration-500 ease-in-out transform hover:scale-110">
            <Image
              src={data.illustrationImagePath}
              alt="The illustration for this book"
              fill={true}
              sizes={"(max-width:992px):576px " + isBig ? "60vw" : "40vw"}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className="absolute inset-2 bg-black p-1 text-white w-fit h-fit rounded-lg">
            {`${new Date(data.date).getDate().toString().padStart(2, "0")}.${(
              new Date(data.date).getMonth() + 1
            )
              .toString()
              .padStart(2, "0")}.${new Date(data.date).getFullYear()}`}
          </div>
        </div>
        <div className="mt-1 p-1 rounded-sm">
          {data.titleSub ? (
            <div
              className={cn(
                "italic text-main-700 text-md",
                isBig ? "lg:text-lg" : "md:text-md"
              )}
            >
              {data.titleSub}
            </div>
          ) : null}
          <div
            className={cn(
              "font-semibold text-main-700",
              isBig ? "text-3xl" : "text-2xl"
            )}
          >
            {data.title}
          </div>

          {data.description && isBig ? (
            <div className="mt-2 text-lg">{data.description}</div>
          ) : (
            <div className="mt-2 text-lg lg:hidden">{data.description}</div>
          )}
        </div>
        <div
          className={cn(
            "text-main-700 ",
            isBig ? "text-right" : "text-left text-sm"
          )}
        >
          von <strong>{data.autor}</strong>
        </div>
      </Link>
    </div>
  );
}
