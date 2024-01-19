import InPostImage from "@/components/inPostImage";
import OverviewGrid from "@/components/overviewGrid";
import StyledH1 from "@/components/styledH1";
import StyledH2 from "@/components/styledH2";

export default async function Home() {
  return (
    <div className="flex flex-col items-center ">
      <StyledH1 className="mb-8 mt-0">Willkommen! Genieß es.</StyledH1>

      <OverviewGrid />
    </div>
  );
}
