import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hyperlocal Ventures | The Intelligence Layer for Local Commerce',
  description:
    'AI-native hyperlocal commerce platform connecting customers to the right nearby store and the right offer instantly. Built to transform local India.',
  keywords: [
    'hyperlocal',
    'AI commerce',
    'local business',
    'discount intelligence',
    'India',
    'shopkeeper platform',
  ],
  openGraph: {
    title: 'Hyperlocal Ventures | The Intelligence Layer for Local Commerce',
    description:
      'Connecting customers to the right nearby store and the right offer instantly.',
    url: 'https://hyperlocalventures.com',
    siteName: 'Hyperlocal Ventures',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B0B0F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
