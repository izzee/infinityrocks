import '@/styles/shared/globals.scss'

export const metadata = {
  title: 'INFINITY ∞ ROCKS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
