import { turistikBolgeler, getTuristikBySlug, getAllTuristikSlugs } from '@/data/turistik'
import { hizmetler } from '@/data/hizmetler'
import { SITE_CONFIG } from '@/data/site-config'
import { generatePageMeta, breadcrumbSchema } from '@/lib/seo'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Phone, ChevronRight, Shield, MapPin, Palmtree } from 'lucide-react'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getAllTuristikSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const t = getTuristikBySlug(params.slug)
  if (!t) return {}
  return generatePageMeta({ title: t.title, description: t.description, path: `/turistik/${t.slug}`, keywords: t.keywords })
}

export default function TuristikPage({ params }: { params: { slug: string } }) {
  const t = getTuristikBySlug(params.slug)
  if (!t) notFound()
  const otherTuristik = turistikBolgeler.filter(b => b.slug !== t.slug)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Anasayfa', url: SITE_CONFIG.url },
        { name: 'Turistik Bölgeler', url: `${SITE_CONFIG.url}/turistik/adana-bodrum-nakliyat` },
        { name: `${t.name} Nakliyat`, url: `${SITE_CONFIG.url}/turistik/${t.slug}` },
      ])) }} />

      <div className="bg-dark-50 border-b border-dark-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-dark-500">
            <Link href="/" className="hover:text-primary-600">Anasayfa</Link>
            <ChevronRight size={14} />
            <span className="text-primary-600 font-medium">Adana {t.name} Nakliyat</span>
          </nav>
        </div>
      </div>

      <section className="bg-primary-700 py-12">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="flex items-center justify-center gap-2 text-accent-300 mb-3">
            <MapPin size={20} />
            <span className="text-sm font-medium">Adana → {t.name} ({t.il})</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">Adana {t.name} Nakliyat</h1>
          <p className="text-blue-200 max-w-2xl mx-auto mb-6">{t.description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${SITE_CONFIG.phoneClean}`} className="flex items-center justify-center gap-2 bg-accent-400 hover:bg-accent-500 text-primary-800 px-6 py-3 rounded-xl font-bold transition">
              <Phone size={18} /> {SITE_CONFIG.phone}
            </a>
            <Link href="/teklif-al" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition border border-white/20">Teklif Al</Link>
            <Link href="/fiyat-hesaplama" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition border border-white/20">Fiyat Hesapla</Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: t.content }} />

          <div className="mt-8 bg-dark-50 rounded-2xl p-6">
            <h3 className="font-heading text-lg font-bold text-primary-700 mb-4">Hizmetlerimiz</h3>
            <div className="grid grid-cols-2 gap-3">
              {hizmetler.map(h => (
                <Link key={h.slug} href={`/hizmetler/${h.slug}`} className="bg-white rounded-lg px-4 py-3 text-sm text-dark-700 hover:text-primary-600 hover:shadow transition">→ {h.name}</Link>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-primary-700 text-white rounded-2xl p-6 text-center">
            <Shield className="mx-auto mb-3 text-accent-300" size={36} />
            <h3 className="font-heading font-bold text-lg mb-2">Sigortalı Taşıma</h3>
            <p className="text-blue-200 text-sm mb-4">Eşyalarınız tam güvence altında</p>
            <a href={`tel:${SITE_CONFIG.phoneClean}`} className="block bg-accent-400 text-primary-800 py-3 rounded-xl font-bold">{SITE_CONFIG.phone}</a>
          </div>

          <div className="bg-accent-50 rounded-2xl p-6">
            <h3 className="font-heading font-bold text-primary-700 mb-4 flex items-center gap-2">
              Turistik Bölgeler
            </h3>
            {otherTuristik.map(b => (
              <Link key={b.slug} href={`/turistik/${b.slug}`} className="block text-sm text-dark-600 hover:text-primary-600 py-1.5 transition">
                → Adana {b.name} Nakliyat
              </Link>
            ))}
          </div>

          <div className="bg-dark-50 rounded-2xl p-6">
            <h3 className="font-heading font-bold text-primary-700 mb-4">Popüler İller</h3>
            <div className="space-y-1.5">
              <Link href="/iller/istanbul-sehirler-arasi-nakliyat" className="block text-sm text-dark-600 hover:text-primary-600">→ İstanbul</Link>
              <Link href="/iller/ankara-sehirler-arasi-nakliyat" className="block text-sm text-dark-600 hover:text-primary-600">→ Ankara</Link>
              <Link href="/iller/izmir-sehirler-arasi-nakliyat" className="block text-sm text-dark-600 hover:text-primary-600">→ İzmir</Link>
              <Link href="/iller/antalya-sehirler-arasi-nakliyat" className="block text-sm text-dark-600 hover:text-primary-600">→ Antalya</Link>
              <Link href="/iller/mugla-sehirler-arasi-nakliyat" className="block text-sm text-dark-600 hover:text-primary-600">→ Muğla</Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
