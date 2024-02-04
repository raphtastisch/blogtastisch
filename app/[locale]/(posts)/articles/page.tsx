// import OverviewElement from "@/components/overviewElement";
import OverviewGrid from "@/components/postOverview/overviewGrid";
import StyledH1 from "@/components/ui/styledH1";
// import { contentFolder } from "@/lib/config";
// import { getAllPosts, getImagePath } from "@/lib/getarticles";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const category = "articles";
  const t = await getTranslations("Articles");

  return (
    <>
      <StyledH1 className="mb-8 mt-0">{t("title")}</StyledH1>
      <OverviewGrid category={category} />
    </>
  );
}
