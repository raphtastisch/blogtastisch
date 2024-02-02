import { cn } from "@/lib/utils";
import { fullNameTags } from "@/lib/books";

export default function Tag({
  tag,
  isActive,
  onClick,
}: {
  tag: string;
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className={cn(
        "m-1 py-1 px-2 xs:px-4 rounded-full select-none text-center text-xs font-semibold ",
        onClick && "cursor-pointer",
        isActive ? "bg-main-700 text-white" : "text-gray-500 bg-gray-300"
      )}
      onClick={() => (onClick ? onClick() : null)}
    >
      {fullNameTags[tag] || tag.charAt(0).toUpperCase() + tag.slice(1)}
    </div>
  );
}
