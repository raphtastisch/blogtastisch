"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export function NavigationDropdown({
  // navDataFull,
  children,
  pathname,
  href,
  hoverMethod,
  isHovered,
}: {
  // navDataFull?: {
  //   title: string;
  //   href: string;
  //   shortDescription: string;
  //   category: string;
  // }[];
  children?: any;
  pathname: string;
  href: string;
  hoverMethod?: (param: boolean) => void;
  isHovered?: boolean;
}) {
  //   const [isHovering, setIsHovering] = useState(false);

  //   const handleMouseEnter = () => {
  //     setIsHovering(true);
  //   };

  //   const handleMouseLeave = () => {
  //     setIsHovering(false);
  //   };

  const commonStyling = cn(
    "flex flex-row space-x-2 items-center  h-full",
    "py-4 px-8 md:py-0 md:px-4 lg:px-8 rounded-xl md:rounded-t-none",
    "border-b-2 border-white"
  );

  if (!hoverMethod) {
    return (
      <>
        <Link
          href={href}
          className="h-full"
          target={pathname === "" ? "_blank" : "_self"}
        >
          <div
            className={cn(
              commonStyling,
              "hover:bg-purewhite hover:border-main-700 hover:border-opacity-50",
              pathname === href ? "border-main-700 bg-purewhite" : ""
            )}
          >
            {children}
          </div>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link href={href} className="h-full ">
          <div
            onMouseEnter={() => hoverMethod(true)}
            onMouseLeave={() => hoverMethod(false)}
            className={cn(
              "relative inline-block",
              commonStyling,
              "hover:bg-purewhite hover:border-purewhite md:hover:rounded-none",
              pathname.includes(href) ? "border-main-700 bg-purewhite" : "",
              isHovered
                ? "bg-purewhite border-purewhite rounded-b-none md:rounded-t-none"
                : ""
            )}
          >
            {children}
          </div>
        </Link>
      </>
    );
  }
}
// <div
//   onMouseEnter={handleMouseEnter}
//   onMouseLeave={handleMouseLeave}
//   className="relative inline-block"
// >
//   <div className="cursor-pointer p-4 border-b-4 border-white hover:border-purewhite hover:bg-purewhite flex flex-row w-full hover:shadow-xl">
//     {children}
//   </div>
//   {isHovering && (
//     <div className="absolute border-b-4 border-main-700  rounded-xl -left-36  py-2 w-sm bg-purewhite shadow-xl z-10">
//       {/* Place your components or menu items here */}
//       <a
//         href="#"
//         className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//       >
//         Item 1
//       </a>
//       <a
//         href="#"
//         className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//       >
//         Item 2
//       </a>
//       <a
//         href="#"
//         className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//       >
//         Item 3
//       </a>
//     </div>
//   )}
// </div>
