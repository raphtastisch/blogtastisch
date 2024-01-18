export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-sm  lg:w-lg xl:w-xl flex flex-col items-center pb-32">
      {children}
    </div>
  );
}
