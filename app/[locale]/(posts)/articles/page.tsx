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
    title: t("articles"),
  };
}

export default function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);
  const category = "articles";
  const t = useTranslations("Articles");

  return (
    <>
      <StyledH1 className="mb-8 mt-0">{t("title")}</StyledH1>
      <OverviewGrid category={category} />
    </>
  );
}
