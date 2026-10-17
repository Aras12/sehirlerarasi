import illerJson from '@/content/iller.json'
import rotalarJson from '@/content/rotalar.json'
import hizmetlerJson from '@/content/hizmetler.json'
import blogJson from '@/content/blog.json'
import ilcelerJson from '@/content/ilceler.json'
import turistikJson from '@/content/turistik.json'
import sayfalarJson from '@/content/sayfalar.json'
import mesafelerJson from '@/content/mesafeler.json'

export type Section = { h2: string; paragraphs: string[]; bullets?: string[] }
export type Faq = { q: string; a: string }
export type Ek = { a: string; dan: string; da: string; in?: string }

export type Il = {
  code: string
  name: string
  slug: string
  region: string
  ilceler: string[]
  kmAdana: number
  komsu: string[]
  ek: Ek
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string[]
  nakliyat: string[]
  fiyat: string[]
  parca: string[]
  sigorta: string[]
  ipucu: string[]
  faq: Faq[]
  imgAlt: string
}

export type Route = {
  slug: string
  to: string
  code: string
  km: number
  ek: Ek
  metaTitle: string
  metaDescription: string
  h1: string
  lead: string
  sections: Section[]
  faq: Faq[]
  ipuclari: string[]
  imgAlt: string
}

export type Service = {
  slug: string
  name: string
  short: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string[]
  sections: Section[]
  faq: Faq[]
  image: string
  imageAlt: string
}

export type Post = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  date: string
  category: string
  excerpt: string
  sections: Section[]
  faq: Faq[]
  relatedServices: string[]
  image: string
}

export type Ilce = {
  slug: string
  name: string
  ek: Ek
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string[]
  sections: Section[]
  faq: Faq[]
}

export type Turistik = {
  slug: string
  name: string
  il: string
  km: number
  ek: Ek
  metaTitle: string
  metaDescription: string
  h1: string
  lead: string
  sections: Section[]
  faq: Faq[]
  imgAlt: string
}

export const iller = illerJson as Il[]
export const rotalar = rotalarJson as Route[]
export const hizmetler = hizmetlerJson as Service[]
export const blog = (blogJson as Post[]).slice().sort((a, b) => b.date.localeCompare(a.date))
export const ilceler = ilcelerJson as Ilce[]
export const turistik = turistikJson as Turistik[]
export const sayfalar = sayfalarJson as any
export const mesafeler = mesafelerJson as Record<string, Record<string, number>>

export const ilByCode = (code: string) => iller.find((i) => i.code === code)!
export const adana = ilByCode('01')
export const routeForCode = (code: string) => rotalar.find((r) => r.code === code)

/** Türkçe sıralama (İ, Ç, Ş ... doğru yerde) */
export const trSort = <T,>(arr: T[], key: (x: T) => string) =>
  arr.slice().sort((a, b) => key(a).localeCompare(key(b), 'tr'))

export const km = (a: string, b: string) => (a === b ? 0 : mesafeler[a]?.[b] ?? mesafeler[b]?.[a] ?? 0)

/** Anasayfada ve menülerde öne çıkan hizmetler (görselli kartlar). */
export const featuredServiceSlugs = [
  'evden-eve-nakliyat',
  'parca-esya-tasima',
  'ambar-nakliye',
  'kamyonet-nakliye',
  'asansorlu-tasima',
  'ambalajli-tasima',
  'ofis-tasima',
  'esya-depolama',
  'mobilya-montaj-demontaj',
  'beyaz-esya-tasima',
  'ogrenci-esyasi-tasima',
  'sigortali-tasima',
]
