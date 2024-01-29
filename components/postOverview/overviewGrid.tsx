import { getAllPosts, getImagePath } from "@/lib/getPosts";
import OverviewElement from "@/components/postOverview/overviewElement";
import { shuffleArray } from "@/lib/utils";

export default async function OverviewGrid({ category }: { category?: string }) {

  // console.log("category", category)

    const overviewElementData = await Promise.all(
    await getAllPosts().then((data) => {

      const shuffledData: any[] = shuffleArray(data);
      // sort data by date to get newest first
      return (
        shuffledData
          .filter((post) => (category ? post.category === category : true)) // only filter if its not empty
          .map(async (post) => {
            const imagePath = await getImagePath(
              post.category,
              post.frontmatter.slug,
              "illustration"
            );

            return {
              title: post.frontmatter.title,
              subtitle: post.frontmatter.subtitle || null,
              href: `/${post.category}/${post.frontmatter.slug}`,
              illustrationImagePath: imagePath,
              longDescription: post.frontmatter.longDescription,
              category: post.category,
              date: post.frontmatter.date,
              author: post.frontmatter.author,
            };
          })
      );
      // Use the frontmatterArray as needed
    })
  );

  return (
    <div className="grid gap-16 grid-cols-1 lg:grid-cols-10 lg:gap-12 xl:gap-16 lg:grid-flow-row-dense">
      {overviewElementData.map((data, index) => {
        // to match the pattern this condition needs to be met. desired pattern for optimal alignment: 0 4 6 10 12 16 18
        const isBig = index === 0 || (index % 2 === 0 && (index - 2) % 6 !== 0);
        //
        return <OverviewElement key={index} isBig={isBig} data={data} />;
      })}
    </div>
  );
}
