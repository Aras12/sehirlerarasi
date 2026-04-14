import { SITE_CONFIG } from '@/data/site-config'
import { Metadata } from 'next'

export function generatePageMeta(opts: {
  title: string
  description: string
  path?: string
  image?: string
  keywords?: string[]
}): Metadata {
  const url = opts.path ? `${SITE_CONFIG.url}${opts.path}` : SITE_CONFIG.url
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords?.join(', '),
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE_CONFIG.name,
      locale: 'tr_TR',
      type: 'website',
      images: opts.image ? [{ url: opts.image, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
    },
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Adana',
      addressRegion: 'Adana',
      addressCountry: 'TR',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Turkey',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '22:00',
    },
    sameAs: [SITE_CONFIG.social.instagram].filter(Boolean),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function reviewSchema(reviews: { name: string; rating: number; text: string; date: string }[]) {
  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avgRating.toFixed(1),
      reviewCount: reviews.length,
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map(r => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: '5' },
      reviewBody: r.text,
      datePublished: r.date,
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'MovingCompany',
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
    },
    areaServed: { '@type': 'Country', name: 'Turkey' },
  }
}
