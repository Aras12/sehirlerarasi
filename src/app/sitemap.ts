import { MetadataRoute } from 'next'
import { iller } from '@/data/iller'
import { ilceler } from '@/data/ilceler'
import { hizmetler } from '@/data/hizmetler'
import { blogPosts } from '@/data/content'
import { turistikBolgeler } from '@/data/turistik'
import { SITE_CONFIG } from '@/data/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/hizmetler`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/fiyat-hesaplama`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/teklif-al`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/galeri`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/sss`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/hakkimizda`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${baseUrl}/iletisim`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.7 },
  ]

  const ilPages = iller.map(il => ({
    url: `${baseUrl}/iller/${il.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const ilcePages = ilceler.map(ilce => ({
    url: `${baseUrl}/ilceler/${ilce.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const hizmetPages = hizmetler.map(h => ({
    url: `${baseUrl}/hizmetler/${h.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  const turistikPages = turistikBolgeler.map(t => ({
    url: `${baseUrl}/turistik/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...ilPages, ...ilcePages, ...hizmetPages, ...blogPages, ...turistikPages]
}
