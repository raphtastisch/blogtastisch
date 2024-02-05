"use client";

import { useLocale, useTranslations } from "next-intl";
import { Locale, locales } from "@/lib/config";
import { FlagIcon } from "react-flag-kit";

import { useRouter, usePathname } from "@/navigation";
import next from "next";
import { cn } from "@/lib/utils";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();

  let nextLocale: Locale;
  if (locale === locales[0]) {
    nextLocale = locales[1];
  } else {
    nextLocale = locales[0];
  }

  return (
    <div
      onClick={() => {
        router.replace(pathname, { locale: nextLocale });
      }}
      className={cn(
        "cursor-pointer rounded-b-xl border-b-4 px-6 md:px-2 lg:px-4 py-2 h-full flex flex-row space-x-2 items-center text-lg font-semibold",
        "text-main-700 hover:bg-purewhite border-transparent hover:border-main-700 hower:shadow-xl"
      )}
    >
      {locale === "en" ? (
        <>
          <div className="w-10 md:w-fit">
            <FlagIcon code="DE" size={34} className="" />
          </div>
          <div className="md:hidden">{t("switch")}</div>
        </>
      ) : (
        <>
          <div className="w-10 md:w-fit">
            <FlagIcon code="GB" size={28} />
          </div>
          <div className="md:hidden">{t("switch")}</div>
        </>
      )}
    </div>
    // <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
    //   {locales.map((cur) => (
    //     <option key={cur} value={cur}>
    //       {t("locale", { locale: cur })}
    //     </option>
    //   ))}
    // </LocaleSwitcherSelect>
  );
}
