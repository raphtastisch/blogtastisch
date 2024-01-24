import { cn } from "@/lib/utils";

export default async function StyledH1({ props, children, className }: any) {
  return (
    <h1
      className={cn(
        "text-3xl md:text-4xl mt-2 md:mt-8 mb-2 text-main-700 font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
