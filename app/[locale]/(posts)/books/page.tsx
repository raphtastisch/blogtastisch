import OverviewGrid from "@/components/postOverview/overviewGrid";
import StyledH1 from "@/components/ui/styledH1";
import { useTranslations } from "next-intl";


export default  function Home() {
  const category = "books";
  const t =  useTranslations("Reviews");

  return (
    <>
      <StyledH1 className="mb-8 mt-0">{t("title")}</StyledH1>
      <OverviewGrid category={category} />
    </>
  );
}
