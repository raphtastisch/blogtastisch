import Image from "next/image";
import { getAllPosts, getPostBySlug, getImagePath } from "@/lib/getPosts";
import InPostImage from "@/components/inPostImage";
import StyledLink from "@/components/styledLink";
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
  const { content, frontmatter, category } = await getPostBySlug(params.books);

  if (!content || !frontmatter || !category) {
    return <div>404 no data found</div>;
  }

  const illustrationImagePath = await getImagePath(
    category,
    frontmatter.slug,
    "illustration"
  );

  const coverImagePath = await getImagePath(
    category,
    frontmatter.slug,
    "cover"
  );

  return (
    <div className="mdx flex flex-col items-center text-md md:text-lg">
      <div className="w-sm lg:w-md flex flex-col ">
        <div className="text-main-700 text-sm md:text-md ml-auto">
          {`${new Date(frontmatter.date)
            .getDate()
            .toString()
            .padStart(2, "0")}.${(new Date(frontmatter.date).getMonth() + 1)
            .toString()
            .padStart(2, "0")}.${new Date(frontmatter.date).getFullYear()}`}
        </div>

        <StyledH1 className="text-center">{frontmatter.title}</StyledH1>

        {frontmatter.titleSub && frontmatter.titleSub !== "" ? (
          <StyledH2 className="text-center mt-2">
            {frontmatter.titleSub}
          </StyledH2>
        ) : null}

        <div className="mt-2 flex w-full justify-end text-main-700">
          von&nbsp;<strong>{frontmatter.autor}</strong>
        </div>

        {frontmatter.description && frontmatter.description !== "" ? (
          <StyledBlockquote className="mt-8">
            {frontmatter.description}
          </StyledBlockquote>
        ) : null}
      </div>

      <InPostImage src={illustrationImagePath} priority={true}/>

      <div className="w-sm lg:w-md flex flex-col">{content}</div>

      {frontmatter.initialReleaseUrl && frontmatter.initialReleaseName ? (
        <div className="mt-8 w-sm lg:w-md ">
          Dieser Buchreview erschien ursprünglich auf&nbsp;
          <StyledLink href={frontmatter.initialReleaseUrl}>
            {frontmatter.initialReleaseName}
          </StyledLink>
        </div>
      ) : null}

      <div className="flex flex-col items-center space-y-4 mt-8">
        <div className="relative h-sm w-sm overflow-hidden rounded-xl">
          <Image
            src={coverImagePath}
            alt="Cover for this book"
            className=""
            // width={300}
            // height={500}
            fill={true}
            sizes="(max-size-768px):70vw (max-size-1024px):50vw 33vw"
            style={{
              width: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
        {/* <Link href="https://amazon.de">
            <Button className="bg-main-900">
              <div className="text-white underline decoration-transparent">
                Hier erhältlich!
              </div>
            </Button>
          </Link> */}
      </div>
    </div>
  );
}
