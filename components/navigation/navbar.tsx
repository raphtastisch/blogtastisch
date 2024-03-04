"use client";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  HomeIcon,
  BookOpenIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  UserIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import NavElement from "./navElement";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import LocaleSwitcher from "./localeSwitcher";
import TrackRefs from "../trackRefs";

const user = {
  name: "Raphael Fritz",
  email: "raphtastisch@proton.me",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  {
    name: "home",
    icon: <HomeIcon className="h-6 w-6 " />,
    href: "/",
    current: true,
  },
  {
    name: "recommendations",
    icon: <StarIcon className="h-6 w-6 " />,
    href: "/recommendations",
    current: false,
  },
  {
    name: "reviews",
    icon: <BookOpenIcon className="h-6 w-6" />,
    href: "/books",
    current: true,
  },
  {
    name: "articles",
    icon: <DocumentTextIcon className="h-6 w-6" />,
    href: "/articles",
    current: false,
  },
  {
    name: "linkedin",
    largeNoName: true,
    icon: <FaLinkedin size={30} className="text-blue-700" />,
    href: "https://www.linkedin.com/in/raphael-fritz/",
    current: false,
  },
  {
    name: "aboutme",
    largeNoName: true,
    icon: (
      <Image
        src="/statics/RaphaelFritz.jpg"
        width={42}
        height={42}
        alt="Raphael Fritz"
        className="rounded-full"
      />
    ), //  <UserIcon className="h-6 w-6 " />,
    href: "/aboutme",
    current: false,
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const t = useTranslations("Navbar");

  // console.log("pathname", pathname);

  return (
    <div
      className={`sticky top-0 z-50 ${
        isScrolled ? "pb-2 shadow-md bg-white" : ""
      }`}
    >
      <Disclosure as="nav" className="bg-white">
        {({ open, close }) => (
          <>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-14 md:h-16 items-center">
                <div className="flex flex-row space-x-2 items-center w-full h-full">
                  <NavElement
                    navItem={navigation[0]}
                    pathname={pathname}
                    className="px-6 md:px-4"
                    close={() => close()}
                  />

                  <div className="hidden  md:flex md:flew-row md:justify-between w-full h-full">
                    <div className="flex items-center space-x-2">
                      {navigation.slice(1, -2).map((item) => (
                        <NavElement
                          key={item.name}
                          navItem={item}
                          pathname={pathname}
                        />
                      ))}
                    </div>

                    <div className="flex items-center space-x-2">
                      {/* removed linkedin icon to make space for locale swither*/}
                      {navigation.slice(-1).map((item) => (
                        <NavElement
                          key={item.name}
                          navItem={item}
                          pathname={pathname}
                        />
                      ))}
                      <LocaleSwitcher />
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gradient-to-r from-main-600 to-main-700 p-2 text-white hover:bg-opacity-90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-main-900">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel
              className={cn("md:hidden", !isScrolled ? "pb-2 shadow-xl" : "")}
            >
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.slice(1).map((item) => (
                  <Link
                    href={item.href}
                    onClick={() => close()}
                    key={item.name}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    className={cn(
                      "block rounded-md px-4 py-2 text-lg font-medium text-main-700 border-b-4 border-transparent",
                      //item.current
                      (!(item.href === "/") && pathname.includes(item.href)) ||
                        (item.href === "/" && pathname.length <= 4)
                        ? "bg-gradient-to-r from-main-600 to-main-700 text-white hover:bg-opacity-90"
                        : "hover:bg-purewhite hover:shadow-lg hover:border-main-700"
                    )}
                    aria-current={item ? "page" : undefined}
                  >
                    <div className="flex flex-row space-x-2 items-center">
                      <div className="w-12 flex flex-col items-center ">
                        {item.icon}
                      </div>
                      <p>{t(item.name)} </p>
                    </div>
                  </Link>
                ))}
                <LocaleSwitcher />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <TrackRefs />
    </div>
  );
}
