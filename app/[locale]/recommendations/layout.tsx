import { locales } from "@/lib/config";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }

export default function RecommendationsLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  unstable_setRequestLocale(locale);
  // w-scren fixes navbar jumps due to scrollbar on pc, but is anoying on mobile, thus only after viewport is bigger than md
  return (
    <div>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </div>
  );
}
