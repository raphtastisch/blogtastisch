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
      className={"text-blue-600 hover:text-blue-400 font-semibold underline" + " " + className}
      {...props}
    >
      {children}
    </Link>
  );
}
