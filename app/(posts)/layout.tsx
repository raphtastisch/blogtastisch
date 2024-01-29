export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-4 flex flex-col items-center">
      {children}
    </div>
  );
}
