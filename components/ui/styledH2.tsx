

export default function StyledH2({props, children, className}: any) {
    return (
      <h1 className={"text-lg sm:text-xl md:text-2xl lg:text-3xl  mb-2 text-main-700" + " " + className} {...props} >
        {children}
      </h1>
    );
}
