import { getAllPosts, getPostBySlug } from "@/lib/getarticles";

// not sure if actually working
export async function generateStaticParams() {
  const data = await getAllPosts();

  //   console.log("dynamicpath data", data);

  return data.map((content: any, frontmatter: any, category: any) => ({
    params: { articles: frontmatter.slug },
  }));
}

export default async function Home({ params }: any) {
  // console.log("article params", params);

  const { content, frontmatter, category } = await getPostBySlug(
    params.articles
  );
  // console.log("articles found", frontmatter, category);

  return (
    <>
      {content ? (
        <div className="mdx">
          Titel: {frontmatter.title}
          {content}
        </div>
      ) : (
        <div> 404 no data found </div>
      )}
    </>
  );
}
