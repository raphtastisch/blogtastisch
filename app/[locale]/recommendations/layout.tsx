import { NextIntlClientProvider, useMessages } from "next-intl";

export default function RecommendationsLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  // w-scren fixes navbar jumps due to scrollbar on pc, but is anoying on mobile, thus only after viewport is bigger than md
  return (
    <div>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </div>
  );
}
