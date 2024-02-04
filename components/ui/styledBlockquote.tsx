import { cn } from "@/lib/utils";

export default async function StyledBlockquote({
  props,
  children,
  className,
}: any) {
  return (
    <blockquote
      className={cn("border-l-4 border-main-700 ml-2 pl-4 blockquote", className)}
      {...props}
    >
      {children}
    </blockquote>
  );
}