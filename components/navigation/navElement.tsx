"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
// import {Link} from "@/navigation"

import { Link } from "@/navigation";

export default function NavElement({
  navItem,
  pathname,
  className,
  close,
}: {
  navItem: {
    name: string;
    href: string;
    current: boolean;
    icon: any;
    largeNoName?: boolean;
  };
  pathname: string;
  className?: string;
  close?: () => void;
}) {
  const t = useTranslations("Navbar");
  // console.log(pathname, navItem.href)
  //   largeNoName = largeNoName || false;
  return (
    <>
      <Link
        href={navItem.href}
        target={navItem.href.startsWith("http") ? "_blank" : "_self"}
        onClick={() => {
          if (close) {
            close();
          }
        }}
        className={cn(
          "rounded-b-xl border-b-4 px-4 lg:px-8 py-2 h-full flex flex-row space-x-2 items-center text-lg font-semibold",
          (!(navItem.href === "/") && pathname.includes(navItem.href)) ||
            (navItem.href === "/" && pathname.length <= 4)
            ? "bg-gradient-to-r from-main-600 to-main-700 text-white hover:bg-opacity-90 shadow-xl border-main-700"
            : "text-main-700 hover:bg-purewhite border-transparent hover:border-main-700 hower:shadow-xl",
          className ? className : ""
        )}
        aria-current={navItem.current ? "page" : undefined}
      >
        {navItem.icon}
        {!navItem.largeNoName ? <p>{t(navItem.name)} </p> : null}
      </Link>
    </>
  );
}
