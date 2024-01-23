import Link from "next/link";

export default async function StyledLink({
  props,
  children,
  href,
  className,
}: any) {

  return (
    <Link
      href={href}
      target="_blank"
      className={"text-blue-600 underline" + " " + className}
      {...props}
    >
      {children}
    </Link>
  );
}
