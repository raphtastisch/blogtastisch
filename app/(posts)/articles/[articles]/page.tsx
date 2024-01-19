import Image from "next/image";
import { getAllPosts, getPostBySlug, getImagePath } from "@/lib/getPosts";
import Link from "next/link";
import InPostImage from "@/components/inPostImage";
import StyledBlockquote from "@/components/styledBlockquote";
import StyledH1 from "@/components/styledH1";
import StyledH2 from "@/components/styledH2";

// not sure if actually working
export async function generateStaticParams() {
  const data = await getAllPosts();

  //   console.log("dynamicpath data", data);

  return data.map((content: any, frontmatter: any, category: any) => ({
    params: { books: frontmatter.slug },
  }));
}

export default async function Home({ params }: any) {
  const { content, frontmatter, category } = await getPostBySlug(
    params.articles
  );

  if (!content || !frontmatter || !category) {
    return <div>404 no data found</div>;
  }

  const illustrationImagePath = await getImagePath(
    category,
    frontmatter.slug,
    "illustration"
  );

  return (
    <div className="mdx flex flex-col items-center md:mt-8 pb-24 text-md md:text-lg">
      <div className="w-sm lg:w-md flex flex-col ">
        <StyledH1 className="text-center">{frontmatter.title}</StyledH1>

        {frontmatter.titleSub && frontmatter.titleSub !== "" ? (
          <StyledH2 className="text-center mt-2">
            {frontmatter.titleSub}
          </StyledH2>
        ) : null}

        <div className="mt-2 flex w-full justify-end text-main-700">
          by&nbsp;<strong>{frontmatter.autor}</strong>
        </div>

        {frontmatter.description && frontmatter.description !== "" ? (
          <StyledBlockquote className="mt-8">
            {" "}
            {frontmatter.description}
          </StyledBlockquote>
        ) : null}
      </div>

      <InPostImage src={illustrationImagePath} />

      <div className="flex flex-col items-center">{content}</div>
    </div>
  );
}
