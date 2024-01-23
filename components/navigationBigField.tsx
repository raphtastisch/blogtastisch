"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  BookOpenIcon,
  DocumentTextIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

export function NavigationBigField({
  // navDataFull,
  hoveringOn,

  setIsHovering,
}: {
  hoveringOn: string;

  setIsHovering: (param: boolean) => void;
}) {
  let content: any;

  if (hoveringOn === "books") {
    content = (
      <>
        <BookOpenIcon className="h-24 w-24 " />
        <div className="text-2xl text-center">Alle Buch-Rezensionen</div>
      </>
    );
  } else if (hoveringOn === "articles") {
    content = (
      <>
        <DocumentTextIcon className="h-24 w-24 " />
        <div className="text-2xl text-center">Alle Artikel</div>
      </>
    );
  }

  return (
    <>
      <Link
        className=""
        href={"/" + hoveringOn}
        onClick={() => setIsHovering(false)}
      >
        <div className="h-96  rounded-xl flex flex-col space-y-4 items-center justify-center border-8 border-purewhite hover:bg-white">
          {content}
        </div>
      </Link>

      {/* {hoveringOn === "articles" ? (
        <Link
          className="flex flex-col space-y-4 items-center "
          href="/articles"
          onClick={() => setIsHovering(false)}
        >
          <BookOpenIcon className="h-24 w-24 " />
          <div className="text-2xl">Alle Artikel</div>
        </Link>
      ) : null} */}
    </>
  );
}
