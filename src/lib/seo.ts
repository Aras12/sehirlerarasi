import type { Metadata } from 'next'
import { SITE_CONFIG, pageUrl } from '@/data/site-config'

export function meta(o: { title: string; description: string; path: string; image?: string; type?: 'website' | 'article'; absoluteTitle?: boolean }): Metadata {
  const url = pageUrl(o.path)
  const image = o.image ?? '/img/genel/sehirler-arasi-evden-eve-nakliyat-banner.webp'
  return {
    title: o.absoluteTitle ? { absolute: o.title } : o.title,
    description: o.description,
    alternates: { canonical: url },
    openGraph: { title: o.title, description: o.description, url, siteName: SITE_CONFIG.name, locale: 'tr_TR', type: o.type ?? 'website', images: [{ url: image }] },
    twitter: { card: 'summary_large_image', title: o.title, description: o.description },
  }
}

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  '@id': `${SITE_CONFIG.url}/#firma`,
  name: SITE_CONFIG.name,
  slogan: SITE_CONFIG.slogan,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/img/genel/barajtrans-logo.png`,
  image: `${SITE_CONFIG.url}/img/genel/sehirler-arasi-evden-eve-nakliyat-banner.webp`,
  telephone: '+90 537 409 24 06',
  email: SITE_CONFIG.email,
  address: { '@type': 'PostalAddress', streetAddress: SITE_CONFIG.addressParts.street, addressLocality: 'Çukurova', addressRegion: 'Adana', addressCountry: 'TR' },
  areaServed: { '@type': 'Country', name: 'Türkiye' },
  openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '07:00', closes: '22:00' },
}

export const serviceSchema = (name: string, description: string, path: string, area: string | string[] = 'Türkiye') => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: pageUrl(path),
  serviceType: 'Şehirler arası evden eve nakliyat',
  provider: { '@id': `${SITE_CONFIG.url}/#firma`, '@type': 'MovingCompany', name: SITE_CONFIG.name, telephone: '+90 537 409 24 06' },
  areaServed: area,
})
