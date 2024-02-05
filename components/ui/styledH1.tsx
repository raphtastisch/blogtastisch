import { cn } from "@/lib/utils";
export default function StyledH1({ props, children, className }: any) {
  return (
    <h1
      className={cn(
        "text-2xl sm:text-3xl md:text-4xl mt-2 md:mt-4 mb-2 text-main-700 font-semibold text-center",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
