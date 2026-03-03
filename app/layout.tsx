import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'mike tommasiello',
  description: 'cultural journalism by mike tommasiello — surface magazine, cool hunting and others',
  openGraph: {
    title: 'mike tommasiello',
    description: 'cultural journalism by mike tommasiello — surface magazine, cool hunting and others',
    type: 'website',
    url: 'https://bymiketommasiello.co',
    images: [
      {
        url: 'https://bymiketommasiello.co/og-image.png',
        width: 1200,
        height: 630,
        alt: 'by mike tommasiello',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mike tommasiello',
    description: 'cultural journalism by mike tommasiello',
    images: ['https://bymiketommasiello.co/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-cream text-ink font-sans antialiased min-h-screen lowercase">
        {children}
      </body>
    </html>
  )
}
