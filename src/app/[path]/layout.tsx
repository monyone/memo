export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-4 pb-6 rounded-lg bg-slate-100">
      { children }
    </div>
  );
}
