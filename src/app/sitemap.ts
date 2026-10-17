import type { MetadataRoute } from 'next'
import { iller, rotalar, hizmetler, blog, ilceler, turistik } from '@/lib/content'
import { pageUrl } from '@/data/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const u = (path: string, priority: number, lastModified: Date = now) => ({ url: pageUrl(path), lastModified, priority })
  return [
    u('/', 1),
    ...['/hizmetler', '/iller', '/rotalar', '/turistik', '/ilceler', '/sehirler-arasi-nakliyat-fiyatlari', '/fiyat-hesaplama', '/esya-hacmi-hesaplama', '/teklif-al', '/blog', '/sss', '/hakkimizda', '/iletisim', '/galeri'].map((p) => u(p, 0.8)),
    ...rotalar.map((r) => u(`/rotalar/${r.slug}`, 0.9)),
    ...iller.map((i) => u(`/iller/${i.slug}`, 0.8)),
    ...hizmetler.map((h) => u(`/hizmetler/${h.slug}`, 0.8)),
    ...turistik.map((t) => u(`/turistik/${t.slug}`, 0.7)),
    ...ilceler.map((x) => u(`/ilceler/${x.slug}`, 0.7)),
    ...blog.map((p) => u(`/blog/${p.slug}`, 0.6, new Date(p.date))),
  ]
}
