import { Category, Locale } from "@/lib/config";
import { getPostContentBySlug } from "@/lib/getPosts";

export default async function PostContent({
  slug,
  locale,
  category,
}: {
  slug: string;
  locale: Locale;
  category: Category;
}) {
  const { content } = await getPostContentBySlug(slug, locale, category);

  return <>{content ? content : <>No contant found!</>}</>;
}
