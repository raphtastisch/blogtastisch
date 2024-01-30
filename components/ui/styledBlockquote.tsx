import { cn } from "@/lib/utils";

export default async function StyledBlockquote({
  props,
  children,
  className,
}: any) {
  return (
    <blockquote
      className={cn("border-l-4 border-main-700 ml-2 pl-4 mb-8", className)}
      {...props}
    >
      {children}
    </blockquote>
  );
}

// const components = {
//   InPostImage,
//   h1: (props: any) =>
//     React.createElement(
//       "h1",
//       {
//         ...props,
//         className: "text-3xl md:text-5xl mt-8 mb-2 text-main-700" + widthSettings,
//       },
//       props.children
//     ),
//   h2: (props: any) =>
//     React.createElement(
//       "h2",
//       {
//         ...props,
//         className: "text-2xl mt-8 mb-2 text-main-700" + widthSettings,
//       },
//       props.children
//     ),
//   h3: (props: any) =>
//     React.createElement(
//       "h3",
//       {
//         ...props,
//         className: "text-xl mt-8 mb-2 text-main-700" + widthSettings,
//       },
//       props.children
//     ),
//   p: (props: any) =>
//     React.createElement(
//       "p",
//       { ...props, className: "mb-2" + widthSettings },
//       props.children
//     ),
//   a: (props: any) =>
//     React.createElement(
//       "a",
//       { ...props, target: "_blank", className: "text-blue-600 underline" },
//       props.children
//     ),

//   blockquote: (props: any) =>
//     React.createElement(
//       "blockquote",
//       {
//         ...props,
//         className: "border-l-4 border-main-700 pl-4 mb-4" + widthSettings,
//       },
//       props.children
//     ),
//   em: (props: any) =>
//     React.createElement(
//       "em",
//       { ...props, className: "italic" },
//       props.children
//     ),
//   strong: (props: any) =>
//     React.createElement(
//       "strong",
//       { ...props, className: "font-bold" },
//       props.children
//     ),
// };
