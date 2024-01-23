import InPostImage from "@/components/ui/inPostImage";
import OverviewGrid from "@/components/postOverview/overviewGrid";
import StyledH1 from "@/components/ui/styledH1";
import StyledH2 from "@/components/ui/styledH2";

export default async function Home() {
  return (
    <div className="flex flex-col items-center ">
      <StyledH1 className="mb-8 mt-0">Willkommen! Genieß es.</StyledH1>

      <OverviewGrid />
    </div>
  );
}
