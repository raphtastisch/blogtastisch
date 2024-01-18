import { getAllPosts, getImagePath } from "@/lib/getarticles";
import OverviewElement from "@/components/overviewElement";

export default async function OverviewGrid({ category }: { category: string }) {
 
    const overviewElementData = await Promise.all(
    await getAllPosts().then((data) => {
      // sort data by date to get newest first
      return data
        .sort((a, b) => {
          return (
            new Date(b.frontmatter.date).getTime() -
            new Date(a.frontmatter.date).getTime()
          );
        })
        .filter((post) => post.category === category)
        .map(async (post) => {
          const imagePath = await getImagePath(
            post.category,
            post.frontmatter.slug,
            "illustration"
          );

          return {
            title: post.frontmatter.title,
            titleSub: post.frontmatter.titleSub || null,
            href: `/${post.category}/${post.frontmatter.slug}`,
            illustrationImagePath: imagePath,
            description: post.frontmatter.description,
            category: post.category,
            date: post.frontmatter.date,
            autor: post.frontmatter.autor,
          };
        });
      // Use the frontmatterArray as needed
    })
  );

  return (
    <div className="w-full grid gap-16 cols-1 lg:gap-12 xl:gap-20 lg:grid-cols-10 lg:grid-flow-row-dense">
      {overviewElementData.map((data, index) => {
        // to match the pattern this condition needs to be met. desired pattern for optimal alignment: 0 4 6 10 12 16 18
        const isBig = index === 0 || (index % 2 === 0 && (index - 2) % 6 !== 0);
        //
        return <OverviewElement key={index} isBig={isBig} data={data} />;
      })}
    </div>
  );
}
