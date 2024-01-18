import Image from "next/image";
import { getAllPosts, getPostBySlug, getImagePath } from "@/lib/getarticles";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <div className="mdx flex flex-col space-y-8 items-center md:mt-8 pb-24 text-md md:text-lg">
      <div className="w-sm lg:w-md flex flex-col ">
        <div className="text-main-700 text-3xl md:text-5xl font-semibold text-center">
          {frontmatter.title}
        </div>

        {frontmatter.titleSub && frontmatter.titleSub !== "" ? (
          <div className="text-main-700 text-xl md:text-3xl text-center mt-2">
            {frontmatter.titleSub}
          </div>
        ) : null}

        <div className="mt-2 flex w-full justify-end text-main-700">
          von&nbsp;<strong>{frontmatter.autor}</strong>
        </div>

        {frontmatter.description && frontmatter.description !== "" ? (
          <div className="mt-8 w-full">
            <blockquote className="w-full">
              {frontmatter.description}
            </blockquote>
          </div>
        ) : null}
      </div>

      <div className="relative w-sm md:w-md lg:w-lg  h-illustration overflow-hidden rounded-xl">
        <div className="relative h-full transition-transform duration-500 ease-in-out transform hover:scale-110">
          <Image
            src={illustrationImagePath}
            alt="Illustration for the book"
            fill={true}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>

      <div className="w-sm lg:w-md flex flex-col pt-4">{content}</div>

      <div className="flex flex-col items-center space-y-4">
        <div className="relative h-sm w-sm overflow-hidden rounded-xl">
          <Image
            src={coverImagePath}
            alt="Cover for this book"
            className=""
            // width={300}
            // height={500}
            fill={true}
            sizes="100vw"
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
