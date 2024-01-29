import { cn } from "@/lib/utils";
import Image from "next/image";

export default async function InPostImage({
  src,
  height,
  width,
  priority,
}: {
  src: string;
  height?: string;
  width?: string;
  priority?:boolean
}) {
  height = height ? height : "h-illustration";
  width = width ? width : "w-full lg:w-lg"

  priority = priority ? priority : false



  return (
    <div className="flex flex-col items-center w-full py-8">
      <div
        className={cn(
          "relative overflow-hidden rounded-xl shadow-xl",
          height,
          width
        )}
      >
        <div className="relative h-full transition-transform duration-500 ease-in-out transform hover:scale-110">
          <Image
            src={src}
            alt="Illustration for the post."
            fill={true}
            sizes="(max-width: 1040px) 100vw, 1040px"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
