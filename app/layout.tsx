import './globals.css'

export const metadata = {
  title: 'Junglescout - Home',
  description: 'The perfect way to scout moderators for your discord server.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
