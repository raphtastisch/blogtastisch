// import OverviewElement from "@/components/overviewElement";
import OverviewGrid from "@/components/postOverview/overviewGrid";
import StyledH1 from "@/components/ui/styledH1";
// import { contentFolder } from "@/lib/config";
// import { getAllPosts, getImagePath } from "@/lib/getarticles";

export default async function Home() {
  const category = "books";
  const headline = "Alles zum Thema Bücher!";

  return (
    <>
      <StyledH1 className="mb-8 mt-0">{headline}</StyledH1>
      <OverviewGrid category={category} />
    </>
  );
}
