import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StickyButtons from '@/components/layout/StickyButtons'
import { SITE_CONFIG } from '@/data/site-config'
import { localBusinessSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.title} | ${SITE_CONFIG.name} | Evden Eve Nakliyat`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: 'şehirler arası nakliyat, adana nakliyat, evden eve nakliyat, adana evden eve nakliyat, şehirler arası taşıma, adana nakliye, sigortalı nakliyat',
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: { canonical: SITE_CONFIG.url },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.title} | ${SITE_CONFIG.name}`,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    // google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    // yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyButtons />
      </body>
    </html>
  )
}
