import type { Metadata } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Danilo Spanò — Flutter Developer | dspano.dev',
  description:
    'Flutter Developer with 5+ years building scalable mobile apps in fintech, insurance, and enterprise. Open source contributor. Based in Turin, open to remote.',
  metadataBase: new URL('https://dspano.dev'),
  openGraph: {
    title: 'Danilo Spanò | Flutter Developer & Open Source Contributor',
    description:
      'Flutter Developer with 5+ years building scalable mobile apps in fintech, insurance, and enterprise.',
    url: 'https://dspano.dev',
    siteName: 'dspano.dev',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Danilo Spanò — Flutter Developer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Danilo Spanò | Flutter Developer',
    description:
      'Flutter Developer with 5+ years building scalable mobile apps.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://dspano.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body bg-bg-primary text-text-primary antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_CF_BEACON_TOKEN}"}`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
