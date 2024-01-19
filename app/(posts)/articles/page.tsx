// import OverviewElement from "@/components/overviewElement";
import OverviewGrid from "@/components/overviewGrid";
import StyledH1 from "@/components/styledH1";
// import { contentFolder } from "@/lib/config";
// import { getAllPosts, getImagePath } from "@/lib/getarticles";

export default async function Home() {
  const category = "articles";
  const headline = "Alle von mir geschriebenen Artikel!";

  return (
    <>
      <StyledH1 className="mb-8 mt-0">{headline}</StyledH1>
      <OverviewGrid category={category} />
    </>
  );
}
