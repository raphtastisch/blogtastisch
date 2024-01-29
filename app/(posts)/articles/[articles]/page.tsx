import Image from "next/image";
import { getAllPosts, getPostBySlug, getImagePath } from "@/lib/getPosts";
import Link from "next/link";
import InPostImage from "@/components/ui/inPostImage";
import StyledBlockquote from "@/components/ui/styledBlockquote";
import StyledH1 from "@/components/ui/styledH1";
import StyledH2 from "@/components/ui/styledH2";
import StyledLink from "@/components/ui/styledLink";

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

  //   return (
  //     <div className="mdx flex flex-col items-center text-md md:text-lg">
  //       <div className="w-sm lg:w-md flex flex-col ">
  //         <div className="text-main-700 text-sm md:text-md ml-auto">
  //           {`${new Date(frontmatter.date)
  //             .getDate()
  //             .toString()
  //             .padStart(2, "0")}.${(new Date(frontmatter.date).getMonth() + 1)
  //             .toString()
  //             .padStart(2, "0")}.${new Date(frontmatter.date).getFullYear()}`}
  //         </div>

  //         <StyledH1 className="text-center">{frontmatter.title}</StyledH1>

  //         {frontmatter.subtitle && frontmatter.subtitle !== "" ? (
  //           <StyledH2 className="text-center mt-2">
  //             {frontmatter.subtitle}
  //           </StyledH2>
  //         ) : null}

  //         <div className="mt-2 flex w-full justify-end text-main-700">
  //           by&nbsp;<strong>{frontmatter.author}</strong>
  //         </div>

  //         {frontmatter.longDescription && frontmatter.longDescription !== "" ? (
  //           <StyledBlockquote className="mt-8">
  //             {" "}
  //             {frontmatter.longDescription}
  //           </StyledBlockquote>
  //         ) : null}
  //       </div>

  //       <InPostImage src={illustrationImagePath} priority={true} />

  //       <div className="flex flex-col items-center">{content}</div>
  //     </div>
  //   );
  // }

  return (
    <div className="mdx flex flex-col items-center text-md md:text-lg w-full">
      <div className="md:w-md flex flex-col">
        <div className="text-main-700 text-sm md:text-md ml-auto">
          {`${new Date(frontmatter.date)
            .getDate()
            .toString()
            .padStart(2, "0")}.${(new Date(frontmatter.date).getMonth() + 1)
            .toString()
            .padStart(2, "0")}.${new Date(frontmatter.date).getFullYear()}`}
        </div>

        <StyledH1 className="text-center">{frontmatter.title}</StyledH1>

        {frontmatter.subtitle && frontmatter.subtitle !== "" ? (
          <StyledH2 className="text-center mt-2">
            {frontmatter.subtitle}
          </StyledH2>
        ) : null}

        <div className="mt-2 flex w-full justify-end text-main-700">
          von&nbsp;<strong>{frontmatter.author}</strong>
        </div>

        {frontmatter.longDescription && frontmatter.longDescription !== "" ? (
          <StyledBlockquote className="mt-8 mb-0">
            {frontmatter.longDescription}
          </StyledBlockquote>
        ) : null}
      </div>

      <InPostImage src={illustrationImagePath} priority={true} />

      {/* Content */}
      <div className="flex flex-col items-center w-full">{content}</div>
    </div>
  );
}
