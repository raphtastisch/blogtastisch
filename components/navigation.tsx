"use client";

import { categories } from "@/lib/config";
import Link from "next/link";
import {
  HomeIcon,
  BookOpenIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavigationDropdown } from "./navigationDropdown";
import { cn } from "@/lib/utils";
import { FaLinkedin } from "react-icons/fa";

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
  //   console.log("mainNavigation", postMetadata);

  const [isHovering, setIsHovering] = useState(false);
  const [hoveringOn, setHoveringOn] = useState("");

  function toogleHovering(isHovering: boolean, hoveringOn?: string) {
    if (hoveringOn) {
      setHoveringOn(hoveringOn);
    }
    setIsHovering(isHovering);
  }

  const navData: any = [];

  for (const category of categories) {
    navData[category] = navDataFull
      .filter((metadata) => metadata.category === category)
      .slice(0, 3);
  }

  // big boxes, underlined if active or if current path
  // https://tailwindui.com/components/application-ui/application-shells/stacked

  const pathname = usePathname();

  return (
    <div className="md:w-md lg:w-lg  relative inline-block">
      <div className="flex flex-row space-x-2 items-center h-16">
        <div className="flex flex-row space-x-2 items-center text-main-700 text-md md:text-lg font-semibold h-full">
          <NavigationDropdown pathname={pathname} href="/">
            <HomeIcon className="h-6 w-6 " />
            <p>Home</p>
          </NavigationDropdown>

          <NavigationDropdown pathname={pathname} href="/recommendations">
            <BookOpenIcon className="h-6 w-6 " />
            <p>Empfehlungen</p>
          </NavigationDropdown>

          <NavigationDropdown
            pathname={pathname}
            href="/books"
            hooverMethod={(hovered: boolean) =>
              toogleHovering(hovered, "books")
            }
          >
            <BookOpenIcon className="h-6 w-6 " />
            <p>Rezensionen</p>
          </NavigationDropdown>

          <NavigationDropdown
            pathname={pathname}
            href="/articles"
            hooverMethod={(hovered: boolean) =>
              toogleHovering(hovered, "articles")
            }
          >
            <DocumentTextIcon className="h-6 w-6" />
            <p>Artikel</p>
          </NavigationDropdown>

          <NavigationDropdown pathname={pathname} href="/aboutme">
            <UserIcon className="h-6 w-6 " />
            <p>Über mich</p>
          </NavigationDropdown>
        </div>
        <div className="ml-auto">
          <NavigationDropdown
            href="https://www.linkedin.com/in/raphael-fritz/"
            pathname=""
          >
            <FaLinkedin size={28} className="text-blue-700" />
          </NavigationDropdown>
        </div>
      </div>
      {isHovering && (
        <div
          className="absolute w-full h-96 bg-purewhite z-50 rounded-xl shadow-xl"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          HALLO {hoveringOn}
          {
            //            navDataFull={navData["books"]}
            //            navDataFull={navData["articles"]}
          }
        </div>
      )}
    </div>
  );
}
