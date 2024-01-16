import { getAllArticles, getArticleBySlug } from "@/lib/getarticles";

// not sure if actually working
export async function generateStaticParams() {
  const data = await getAllArticles();

  //   console.log("dynamicpath data", data);

  return data.map((content: any, frontmatter: any, category: any) => ({
    params: { books: frontmatter.slug },
  }));
}

export default async function Home(params: any) {

  const { content, frontmatter, category } = await getArticleBySlug(
    params.params.books,
    params.params.category
  );

  // console.log("bookpage", frontmatter, category);

  return (
    <>
      {content ? (
        <div className="mdx">
          Titel: {frontmatter.title} {content}
        </div>
      ) : (
        <div> 404 no data found </div>
      )}
    </>
  );
}
