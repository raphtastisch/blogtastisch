
export default function MdxLayout({ metadata, children }: { metadata:any, children: React.ReactNode }) {

  console.log("in layout", metadata);
  console.log("in layout childern: ", children);

  // Create any shared layout or styles here
  return <div className="p-8 mdx text-black ">{children}</div>;
}


