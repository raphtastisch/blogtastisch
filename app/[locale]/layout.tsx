import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/navigation/navbar";
import Impressum from "@/components/impressum";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raphis Blog",
  description: "Great book recommendations!",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

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
      </body>
    </html>
  );
}
