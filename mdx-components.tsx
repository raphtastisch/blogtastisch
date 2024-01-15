import type { MDXComponents } from "mdx/types";

export function useMDXComponents(
  metadata: any,
  components: MDXComponents
): MDXComponents {
  console.log("in mdx-components", metadata);
  return {
    ...components,
  };
}



