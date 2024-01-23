

export default async function StyledH1({props, children, className}: any) {
    return (
      <h1
        className={
          "text-3xl md:text-5xl mt-2 md:mt-8 mb-2 text-main-700 font-semibold" +
          " " +
          className
        }
        {...props}
      >
        {children}
      </h1>
    );
}
