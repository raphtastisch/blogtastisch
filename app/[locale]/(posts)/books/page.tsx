import OverviewGrid from "@/components/postOverview/overviewGrid";
import StyledH1 from "@/components/ui/styledH1";
import { Locale } from "@/lib/config";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "Navbar" });

  return {
    title: t("reviews"),
  };
}

export default function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const category = "books";
  unstable_setRequestLocale(locale);
  const t = useTranslations("Reviews");

  return (
    <>
      <StyledH1 className="mb-8 mt-0">{t("title")}</StyledH1>
      <OverviewGrid category={category} />
    </>
  );
}
