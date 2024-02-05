import { Locale } from "@/lib/config";
import { unstable_setRequestLocale } from "next-intl/server";

// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);
  return <div className="px-4 flex flex-col items-center">{children}</div>;
}
