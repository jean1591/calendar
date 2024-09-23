export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <div className="mx-auto h-screen max-w-7xl px-4 py-12">{children}</div>
    </div>
  )
}
