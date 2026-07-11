import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'SerendibAI - AI Call Center Agents for Sri Lankan Businesses',
  description: 'Managed AI call center agents that answer inbound customer calls in English, Sinhala, and Tamil for Sri Lankan businesses.',
  generator: 'v0.app',
  openGraph: {
    title: 'SerendibAI - AI Call Center Agents',
    description: 'Managed AI call center agents for Sri Lankan businesses. English, Sinhala, and Tamil inbound call handling.',
    type: 'website',
    images: [
      {
        url: '/serendibai-social-preview.png',
        width: 1200,
        height: 630,
        alt: 'SerendibAI AI call center agents social preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SerendibAI - AI Call Center Agents',
    description: 'Managed AI call center agents for Sri Lankan businesses. English, Sinhala, and Tamil inbound call handling.',
    images: ['/serendibai-social-preview.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [{ color: '#ffffff' }],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
