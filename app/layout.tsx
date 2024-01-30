import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/navigation/navbar";
import Impressum from "@/components/impressum";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raphis Blog",
  description: "Raphis personal blog",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // w-scren fixes navbar jumps due to scrollbar on pc, but is anoying on mobile, thus only after viewport is bigger than md
  return (
    <html lang="de" className="h-full md:w-screen">
      <body className=" h-full bg-white text-black overflow-x-hidden text-sm sm:text-base md:text-lg">
        <main className="min-h-full">
          <Navbar />
          <div className="mx-auto max-w-7xl py-4">
            {children} <Impressum/>
          </div>
        </main>
        <SpeedInsights />
        <Analytics/>
      </body>
    </html>
  );
}
