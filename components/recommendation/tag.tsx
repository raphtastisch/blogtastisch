import { cn } from "@/lib/utils";

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
        "m-1 py-1 px-4 rounded-full select-none text-center text-xs font-semibold ",
        onClick && "cursor-pointer",
        isActive ? "bg-main-500 text-black" : "text-gray-500 bg-gray-300"
      )}
      onClick={() => (onClick ? onClick() : null)}
    >
      {tag}
    </div>
  );
}
