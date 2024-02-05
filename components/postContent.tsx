import { Category } from "@/lib/config";
import { getPostBySlug } from "@/lib/getPosts";

export default async function PostContent({
  slug,
  locale,
  category,
}: {
  slug: string;
  locale: string;
  category: Category;
}) {
  const { content } = await getPostBySlug(slug, locale, category);

  return <>{content ? content : <>No contant found!</>}</>;
}
