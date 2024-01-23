"use client";

import { categories } from "@/lib/config";
import Link from "next/link";
import {
  HomeIcon,
  BookOpenIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  UserIcon,
  StarIcon,
  Bars3Icon
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavigationDropdown } from "./navigationDropdown";
import { cn } from "@/lib/utils";
import { FaLinkedin } from "react-icons/fa";
import { NavigationBigField } from "./navigationBigField";

import { useMediaQuery } from "react-responsive";

export function Navigation({
  navDataFull,
}: {
  navDataFull: {
    title: string;
    href: string;
    shortDescription: string;
    category: string;
  }[];
}) {
  // //   console.log("mainNavigation", postMetadata);
  // const isMdViewport = useMediaQuery({ minWidth: 768 }); // Tailwind's 'md' breakpoint is 768px
  // console.log("mdvieport", isMdViewport);

  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);
  const [hoveringOn, setHoveringOn] = useState(""); // split up because hover over the pop-up should not change this
  const [isHoveringWholeBar, setIsHoveringWholeBar] = useState(false);

  function toogleHovering(isHovering: boolean, hoveringOn?: string) {
    if (hoveringOn) {
      setHoveringOn(hoveringOn);
    }
    setIsHoveringDropdown(isHovering);
  }

  const navData: any = [];

  for (const category of categories) {
    navData[category] = navDataFull
      .filter((metadata) => metadata.category === category)
      .slice(0, 3);
  }

  const pathnameFromHook = usePathname();

  const pathname = !isHoveringWholeBar ? pathnameFromHook : "none";

  // big boxes, underlined if active or if current path
  // https://tailwindui.com/components/application-ui/application-shells/stacked



  return (
    <>
      {/* {isMdViewport ? (
        <div className="w-full relative inline-block text-main-700 font-semibold">
          <Bars3Icon className="h-8 w-8" />
        </div>
      ) : ( */}
        <div className="w-full md:w-md lg:w-lg  relative inline-block text-main-700 font-semibold pt-4 md:pt-0">
          <div
            className="flex flex-row items-start md:items-center h-fit md:h-16"
            onMouseEnter={() => setIsHoveringWholeBar(true)}
            onMouseLeave={() => setIsHoveringWholeBar(false)}
          >
            <div className="grid grid-cols-2 md:flex md:flex-row items-center text-md md:text-lg h-full">
              <NavigationDropdown pathname={pathname} href="/">
                <HomeIcon className="h-6 w-6 " />
                <p>Home</p>
              </NavigationDropdown>

              <NavigationDropdown pathname={pathname} href="/recommendations">
                <StarIcon className="h-6 w-6 " />
                <p>Empfehlungen</p>
              </NavigationDropdown>

              <NavigationDropdown
                pathname={pathname}
                href="/books"
                hoverMethod={(hovered: boolean) =>
                  toogleHovering(hovered, "books")
                }
                isHovered={isHoveringDropdown && hoveringOn === "books"}
              >
                <BookOpenIcon className="h-6 w-6" />
                <p>Rezensionen</p>
              </NavigationDropdown>
              <NavigationDropdown
                pathname={pathname}
                href="/articles"
                hoverMethod={(hovered: boolean) =>
                  toogleHovering(hovered, "articles")
                }
                isHovered={isHoveringDropdown && hoveringOn === "articles"}
              >
                <DocumentTextIcon className="h-6 w-6" />
                <p>Artikel</p>
              </NavigationDropdown>
            </div>
            <div className="ml-auto h-full flex flex-col md:flex-row items-center text-md md:text-lg">
              <NavigationDropdown pathname={pathname} href="/aboutme">
                <UserIcon className="h-6 w-6 " />
                <p>Über</p>
              </NavigationDropdown>

              <NavigationDropdown
                href="https://www.linkedin.com/in/raphael-fritz/"
                pathname=""
              >
                <FaLinkedin size={24} className="text-blue-700" />
              </NavigationDropdown>
            </div>
          </div>
          {isHoveringDropdown && hoveringOn !== "" && (
            <div
              className={cn(
                "absolute flex flex-row items-center w-full h-fit bg-purewhite border-b-2 border-main-700 z-50 rounded-xl shadow-xl transition duration-500 delay-150"
              )}
              onMouseEnter={() => setIsHoveringDropdown(true)}
              onMouseLeave={() => setIsHoveringDropdown(false)}
            >
              <div className="w-1/3">
                {/* <div className="h-96 border-8 border-purewhite hover:bg-white rounded-xl flex items-center justify-center "> */}
                {/* {hoveringOn === "books" ? (
                <Link
                  className="flex flex-col space-y-4 items-center "
                  href="/books"
                  onClick={() => setIsHovering(false)}
                >
                  <BookOpenIcon className="h-24 w-24 " />
                  <div className="text-2xl">Alle Buch-Rezensionen</div>
                </Link>
              ) : null} */}
                <NavigationBigField
                  hoveringOn={hoveringOn}
                  setIsHovering={(param: boolean) =>
                    setIsHoveringDropdown(param)
                  }
                ></NavigationBigField>
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
                {/* </div> */}
              </div>
              <div className="w-2/3 h-full flex flex-col space-y-1 justify-center px-4">
                {navData[hoveringOn].slice(0, 3).map((navData: any) => (
                  <Link
                    key={navData.title}
                    className="flex flex-row space-x-2 items-center text-main-700 text-lg p-4 rounded-xl hover:bg-white"
                    href={navData.href}
                    onClick={() => setIsHoveringDropdown(false)}
                  >
                    <div className="flex flex-row space-x-2">
                      <AcademicCapIcon className="h-8 w-8" />
                      <div className="flex flex-col space-y-1">
                        <div className="text-xl">{navData.title}</div>
                        <div className="text-md font-normal">
                          {navData.shortDescription}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      {/* )} */}
    </>
  );
}
