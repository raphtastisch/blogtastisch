import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/navigation/navbar";
import Impressum from "@/components/impressum";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Locale, locales } from "@/lib/config";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import TrackRefs from "@/components/trackRefs";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      default: t("title"),
      template: "%s | " + t("title"),
    },
    description: t("description"),
    creator: "Raphael Fritz",
    keywords: [
      t("book"),
      t("recommendation"),
      t("read"),
      t("audiobook"),
      t("blog"),
    ], //["Book", "Recommendation", "Read", "Audiobook"],
  };
}

// export const metadata: Metadata = {
//   title: {
//     default: "Raphis Blog",
//     template: "%s | Raphis Blog",
//   },
//   description: "Great book recommendations!",
//   creator: "Raphael Fritz",
//   keywords: ["Book", "Recommendation", "Read", "Audiobook"],
// };

// can most likely be deleted (or does it tickle down everyhwere, thus not needed in (posts)/layout.tsx ?
// removing might need to remove params {locale} from children
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const messages = useMessages();
  unstable_setRequestLocale(locale);

  // w-scren fixes navbar jumps due to scrollbar on pc, but is anoying on mobile, thus only after viewport is bigger than md
  return (
    <html lang={locale} className="h-full md:w-screen">
      <body className="h-full bg-white text-black overflow-x-hidden text-sm sm:text-base md:text-lg tracking-wide leading-relaxed sm:tracking-normal sm:leading-normal">
        <main className="min-h-full">
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
          </NextIntlClientProvider>
          <div className="mx-auto max-w-7xl py-4">
            {children}
            <NextIntlClientProvider locale={locale} messages={messages}>
              <Impressum />
            </NextIntlClientProvider>
          </div>
        </main>
        <SpeedInsights />
        <Analytics />
        <TrackRefs />
      </body>
    </html>
  );
}
