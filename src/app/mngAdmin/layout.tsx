

export default function mngAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <h1>你好</h1>
        {children}
    </div>
  );
}
