"use client";

import * as React from "react";
import Link from "next/link";
import {
  HomeIcon,
  BookOpenIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { FaLinkedin } from "react-icons/fa";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { categories } from "@/lib/config";

export function MainNavigation({
  mainNavDataFull,
}: {
  mainNavDataFull: {
    title: string;
    href: string;
    shortDescription: string;
    category: string;
  }[];
}) {
  //   console.log("mainNavigation", postMetadata);

  const mainNavData: any = [];

  for (const category of categories) {
    mainNavData[category] = mainNavDataFull
      .filter((metadata) => metadata.category === category)
      .slice(0, 3);
  }

  //   console.log("mainNavigation", mainNavData);

  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-2">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle() + " md:px-8 bg-white"}
            >
              <div className="flex flex-row space-x-2 items-center text-main-700 text-lg">
                <HomeIcon className="h-6 w-6 " />
                <p>Home</p>
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/*
        Books 
        */}
        <NavigationMenuItem>
          {/* <Link href="/books"> */}
          <NavigationMenuTrigger className="md:px-8 bg-white">
            <div className="flex flex-row space-x-2 items-center text-main-700 text-lg">
              <BookOpenIcon className="h-6 w-6 " />
              <p>Bücher</p>
            </div>
          </NavigationMenuTrigger>
          {/* </Link> */}
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3" key="bookmain">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/books"
                  >
                    <AcademicCapIcon className="h-12 w-12 text-main-700" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Alle Bücher
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Hier findest du alle Buchreviews, Empfehlungen und vieles
                      mehr!
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {mainNavData.books.map((navData: any) => (
                <ListItem
                  key={navData.title}
                  title={navData.title}
                  href={navData.href}
                >
                  {navData.shortDescription}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/*
        Articles 
        */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="md:px-8 bg-white">
            <div className="flex flex-row space-x-2 items-center text-main-700 text-lg">
              <DocumentTextIcon className="h-6 w-6" />
              <p>Artikel</p>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3" key="bookmain">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/articles"
                  >
                    <AcademicCapIcon className="h-12 w-12 text-main-700" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Alle Artikel
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Hier findest du alle Artikel, Empfehlungen und vieles
                      mehr!
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {mainNavData.articles.map((navData: any) => (
                <ListItem
                  key={navData.title}
                  title={navData.title}
                  href={navData.href}
                >
                  {navData.shortDescription}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* 
        about me
         */}
        <NavigationMenuItem>
          <Link href="/aboutme" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle() + " md:px-8 bg-white"}
            >
              <div className="flex flex-row space-x-2 items-center text-main-700 text-lg">
                <UserIcon className="h-6 w-6 " />
                <p>Über mich</p>
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/*
        Linkedin 
        */}
        <NavigationMenuItem className="">
          <Link
            href="https://www.linkedin.com/in/raphael-fritz/"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink
              className={
                navigationMenuTriggerStyle() +
                " md:px-8 ml-16 md:ml-60 bg-white"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row space-x-2 items-center">
                <FaLinkedin size={32} className="text-blue-700" />
                {/* <p>Linkedin</p> */}
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
