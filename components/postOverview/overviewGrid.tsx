import { getAllPosts, getImagePath } from "@/lib/getPosts";
import OverviewElement from "@/components/postOverview/overviewElement";
import { shuffleArray } from "@/lib/utils";
import { Locale, defaultWrittenBy, locales } from "@/lib/config";
import { useLocale } from "next-intl";

export default function OverviewGrid({ category }: { category?: string }) {
  // console.log("category", category)

  // make sure that the locale is valid
  let locale = useLocale();
  if (!locale || !(locales as string[]).includes(locale)) {
    locale = "en";
  }

  const overviewElementDataWithoutImagePaths = shuffleArray(
    getAllPosts(category)
  );

  const overviewElementData = overviewElementDataWithoutImagePaths.map(
    (post) => {
      const imagePath = getImagePath(post.category, post.slug, "illustration");

      return {
        title: post[locale].title,
        subtitle: post[locale].subtitle || null,
        href: `/${post.category}/${post.slug}`,
        illustrationImagePath: imagePath,
        shortDescription: post[locale].shortDescription,
        longDescription: post[locale].longDescription,
        category: post.category,
        date: post.date,
        author: post.author ? post.author : post.writtenBy || defaultWrittenBy, // if an author exists, use it, otherwise use written by, default writtenby as default
      };
    }
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
