import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileBar from '@/components/MobileBar'
import { SITE_CONFIG } from '@/data/site-config'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: { default: 'Şehirler Arası Nakliyat | BarajTrans', template: '%s | BarajTrans' },
  description: SITE_CONFIG.description,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  verification: { google: 'yJ1e6E8DcR_89j2OkipVkh-dtj4MvptCOBa7WjMpu84' },
  icons: { icon: '/favicon.png', apple: '/apple-touch-icon.png' },
}

export const viewport: Viewport = { themeColor: '#0f2a5c', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a href="#icerik" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">İçeriğe geç</a>
        <Header />
        <main id="icerik">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  )
}
