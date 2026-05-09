import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import SplashCursor from '../components/SplashCursor'
import CustomCursor from '../components/CustomCursor'
import { BackToTop } from '../components/BackToTop'
import { VisitTracker } from '../components/visit-tracker'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import './globals.css'
import Image from 'next/image'
import { ParticleGrid } from '../components/particle-grid'

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
  title: 'ZoPin | The Intelligence Layer for Local Commerce',
  description:
    'AI-native ZoPin commerce platform connecting customers to the right nearby store and the right offer instantly. Built to transform local India.',
  keywords: [
    'ZoPin',
    'AI commerce',
    'local business',
    'discount intelligence',
    'India',
    'shopkeeper platform',
  ],
  openGraph: {
    title: 'ZoPin | The Intelligence Layer for Local Commerce',
    description:
      'Connecting customers to the right nearby store and the right offer instantly.',
    url: 'https://zopin.io',
    siteName: 'ZoPin',
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
    <html lang="en" className={`${spaceGrotesk.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased cursor-none min-h-screen" style={{ backgroundColor: 'var(--background)' }} suppressHydrationWarning>
        <SplashCursor />
        <CustomCursor />
        <BackToTop />

        {/* Global Background System */}
        <ParticleGrid />

        {/* Cart pattern background - Global & Fixed */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.05]">
          <Image
            src="/images/cart-background.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Large radial glows - Fixed Global */}
        <div
          className="fixed left-1/2 top-[36%] h-[920px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle at center, var(--primary) 0%, var(--neon) 50%, transparent 80%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />
        <div
          className="fixed bottom-0 left-0 right-0 h-[400px] opacity-10 pointer-events-none z-0"
          style={{
            background:
              "linear-gradient(to top, var(--primary), var(--neon), transparent)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
        <VisitTracker />
        <Analytics />
      </body>
    </html>
  )
}
