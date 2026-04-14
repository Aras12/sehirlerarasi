import { iller, getIlBySlug, getAllIlSlugs } from '@/data/iller'
import { hizmetler } from '@/data/hizmetler'
import { ilceler } from '@/data/ilceler'
import { SITE_CONFIG } from '@/data/site-config'
import { generatePageMeta, breadcrumbSchema, serviceSchema } from '@/lib/seo'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Phone, ArrowRight, MapPin, Shield, ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getAllIlSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const il = getIlBySlug(params.slug)
  if (!il) return {}
  return generatePageMeta({
    title: il.title,
    description: il.description,
    path: `/iller/${il.slug}`,
    keywords: il.keywords,
  })
}

export default function IlPage({ params }: { params: { slug: string } }) {
  const il = getIlBySlug(params.slug)
  if (!il) notFound()

  const otherIller = iller.filter(i => i.slug !== il.slug).slice(0, 20)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Anasayfa', url: SITE_CONFIG.url },
        { name: 'Şehirler', url: `${SITE_CONFIG.url}/iller/istanbul-sehirler-arasi-nakliyat` },
        { name: `${il.name} Nakliyat`, url: `${SITE_CONFIG.url}/iller/${il.slug}` },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
        `${il.name} Şehirler Arası Nakliyat`,
        il.description,
        `${SITE_CONFIG.url}/iller/${il.slug}`
      )) }} />

      {/* Breadcrumb */}
      <div className="bg-dark-50 border-b border-dark-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-dark-500">
            <Link href="/" className="hover:text-primary-600 transition">Anasayfa</Link>
            <ChevronRight size={14} />
            <Link href="/iller/istanbul-sehirler-arasi-nakliyat" className="hover:text-primary-600 transition">Şehirler</Link>
            <ChevronRight size={14} />
            <span className="text-primary-600 font-medium">{il.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary-700 py-12">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="flex items-center justify-center gap-2 text-accent-300 mb-3">
            <MapPin size={20} />
            <span className="text-sm font-medium">Adana → {il.name}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">{il.name} Şehirler Arası Nakliyat</h1>
          <p className="text-blue-200 max-w-2xl mx-auto mb-6">{il.description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${SITE_CONFIG.phoneClean}`} className="flex items-center justify-center gap-2 bg-accent-400 hover:bg-accent-500 text-primary-800 px-6 py-3 rounded-xl font-bold transition">
              <Phone size={18} /> Hemen Ara
            </a>
            <Link href="/teklif-al" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition border border-white/20">
              Teklif Al
            </Link>
            <Link href="/fiyat-hesaplama" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition border border-white/20">
              Fiyat Hesapla
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: il.content }} />

            {/* Internal links to services */}
            <div className="mt-8 bg-dark-50 rounded-2xl p-6">
              <h3 className="font-heading text-xl font-bold text-primary-700 mb-4">{il.name} Nakliyat Hizmetlerimiz</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {hizmetler.map(h => (
                  <Link key={h.slug} href={`/hizmetler/${h.slug}`} className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 text-sm text-dark-700 hover:text-primary-600 hover:shadow-md transition">
                    <ArrowRight size={14} className="text-accent-500" />
                    {il.name} {h.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Adana ilçeleri link */}
            <div className="mt-6 bg-accent-50 rounded-2xl p-6">
              <h3 className="font-heading text-lg font-bold text-primary-700 mb-3">Adana İlçeleri Nakliyat</h3>
              <div className="flex flex-wrap gap-2">
                {ilceler.map(ilce => (
                  <Link key={ilce.slug} href={`/ilceler/${ilce.slug}`} className="text-xs bg-white px-3 py-1.5 rounded-full text-dark-600 hover:text-primary-600 hover:bg-primary-50 transition">
                    {ilce.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* CTA Card */}
            <div className="bg-primary-700 text-white rounded-2xl p-6 text-center">
              <Shield className="mx-auto mb-3 text-accent-300" size={36} />
              <h3 className="font-heading font-bold text-lg mb-2">Sigortalı Taşımacılık</h3>
              <p className="text-blue-200 text-sm mb-4">Eşyalarınız tam güvence altında taşınır.</p>
              <a href={`tel:${SITE_CONFIG.phoneClean}`} className="block bg-accent-400 hover:bg-accent-500 text-primary-800 py-3 rounded-xl font-bold transition">
                {SITE_CONFIG.phone}
              </a>
            </div>

            {/* Quick links to other iller */}
            <div className="bg-dark-50 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-primary-700 mb-4">Diğer Güzergahlar</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {otherIller.map(i => (
                  <Link key={i.slug} href={`/iller/${i.slug}`} className="block text-sm text-dark-600 hover:text-primary-600 py-1 transition">
                    → Adana {i.name} Nakliyat
                  </Link>
                ))}
              </div>
              <Link href="/#iller" className="block text-center text-primary-600 font-semibold text-sm mt-4 hover:text-primary-700">
                Tüm İller →
              </Link>
            </div>

            {/* Blog links */}
            <div className="bg-white border border-dark-100 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-primary-700 mb-4">Blog Yazıları</h3>
              <div className="space-y-3">
                <Link href="/blog/sehirler-arasi-nakliyat-fiyatlari-2025" className="block text-sm text-dark-600 hover:text-primary-600 transition">📰 Şehirler Arası Nakliyat Fiyatları 2025</Link>
                <Link href="/blog/tasinma-oncesi-yapilacaklar-listesi" className="block text-sm text-dark-600 hover:text-primary-600 transition">📰 Taşınma Öncesi Yapılacaklar</Link>
                <Link href="/blog/asansorlu-nakliyat-nedir-avantajlari" className="block text-sm text-dark-600 hover:text-primary-600 transition">📰 Asansörlü Nakliyat Avantajları</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
