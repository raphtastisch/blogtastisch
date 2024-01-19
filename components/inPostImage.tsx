import { cn } from "@/lib/utils";
import Image from "next/image";

export default async function InPostImage({
  src,
  height,
  width,
}: {
  src: string;
  height?: string;
  width?: string;
}) {
  height = height ? height : "h-illustration";
  width = width ? width : "w-sm md:w-md lg:w-lg"

  return (
    <div className="py-8">
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
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
}
