import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raphis Blog",
  description: "Raphis personal blog",
};

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <html lang="de">
      <body className="flex flex-col w-screen overflow-hidden">
        <div className="w-full flex-none">
          <Navbar />
          {/* <Navbar articlesMetadata={metadata} /> */}
        </div>
        <div className="flex-grow p-4">{children}</div>
      </body>
    </html>
  );
}
