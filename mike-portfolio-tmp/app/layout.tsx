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
  description: 'cultural journalism by mike tommasiello — cool hunting & surface magazine',
  openGraph: {
    title: 'mike tommasiello',
    description: 'cultural journalism by mike tommasiello',
    type: 'website',
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
