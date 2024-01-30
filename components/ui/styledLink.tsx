import Link from "next/link";

export default function StyledLink({
  props,
  children,
  href,
  className,
}: any) {

  return (
    <Link
      href={href}
      target="_blank"
      className={"flex flex-row items-center space-x-2 text-blue-600 hover:text-blue-400 font-semibold underline" + " " + className}
      {...props}
    >
      {children}
    </Link>
  );
}
