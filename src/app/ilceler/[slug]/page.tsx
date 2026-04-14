import { ilceler, getIlceBySlug, getAllIlceSlugs } from '@/data/ilceler'
import { hizmetler } from '@/data/hizmetler'
import { iller } from '@/data/iller'
import { SITE_CONFIG } from '@/data/site-config'
import { generatePageMeta, breadcrumbSchema } from '@/lib/seo'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Phone, ChevronRight, Shield, MapPin } from 'lucide-react'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getAllIlceSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const ilce = getIlceBySlug(params.slug)
  if (!ilce) return {}
  return generatePageMeta({ title: ilce.title, description: ilce.description, path: `/ilceler/${ilce.slug}` })
}

export default function IlcePage({ params }: { params: { slug: string } }) {
  const ilce = getIlceBySlug(params.slug)
  if (!ilce) notFound()
  const otherIlceler = ilceler.filter(i => i.slug !== ilce.slug)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Anasayfa', url: SITE_CONFIG.url },
        { name: 'Adana İlçeleri', url: `${SITE_CONFIG.url}/ilceler/seyhan-nakliyat` },
        { name: ilce.name, url: `${SITE_CONFIG.url}/ilceler/${ilce.slug}` },
      ])) }} />

      <div className="bg-dark-50 border-b border-dark-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-dark-500">
            <Link href="/" className="hover:text-primary-600">Anasayfa</Link>
            <ChevronRight size={14} />
            <span className="text-primary-600 font-medium">{ilce.name}</span>
          </nav>
        </div>
      </div>

      <section className="bg-primary-700 py-10">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="flex items-center justify-center gap-2 text-accent-300 mb-3"><MapPin size={18} /><span className="text-sm">Adana - {ilce.name}</span></div>
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">{ilce.name} Evden Eve Nakliyat</h1>
          <p className="text-blue-200 max-w-2xl mx-auto mb-6">{ilce.description}</p>
          <div className="flex justify-center gap-4">
            <a href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-accent-400 hover:bg-accent-500 text-primary-800 px-6 py-3 rounded-xl font-bold flex items-center gap-2"><Phone size={18} /> Hemen Ara</a>
            <Link href="/fiyat-hesaplama" className="bg-white/10 text-white px-6 py-3 rounded-xl font-semibold border border-white/20">Fiyat Hesapla</Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: ilce.content }} />
          <div className="mt-8 bg-dark-50 rounded-2xl p-6">
            <h3 className="font-heading text-lg font-bold text-primary-700 mb-4">Hizmetlerimiz</h3>
            <div className="grid grid-cols-2 gap-3">
              {hizmetler.map(h => (
                <Link key={h.slug} href={`/hizmetler/${h.slug}`} className="bg-white rounded-lg px-4 py-3 text-sm text-dark-700 hover:text-primary-600 hover:shadow transition">→ {h.name}</Link>
              ))}
            </div>
          </div>
          <div className="mt-6 bg-accent-50 rounded-2xl p-6">
            <h3 className="font-heading text-lg font-bold text-primary-700 mb-3">Popüler Şehirler Arası Güzergahlar</h3>
            <div className="flex flex-wrap gap-2">
              {iller.slice(0, 15).map(il => (
                <Link key={il.slug} href={`/iller/${il.slug}`} className="text-xs bg-white px-3 py-1.5 rounded-full text-dark-600 hover:text-primary-600 transition">{il.name}</Link>
              ))}
            </div>
          </div>
        </div>
        <aside className="space-y-6">
          <div className="bg-primary-700 text-white rounded-2xl p-6 text-center">
            <Shield className="mx-auto mb-3 text-accent-300" size={36} />
            <h3 className="font-heading font-bold text-lg mb-2">Ücretsiz Keşif</h3>
            <p className="text-blue-200 text-sm mb-4">Yerinde fiyat teklifi için arayın.</p>
            <a href={`tel:${SITE_CONFIG.phoneClean}`} className="block bg-accent-400 text-primary-800 py-3 rounded-xl font-bold">{SITE_CONFIG.phone}</a>
          </div>
          <div className="bg-dark-50 rounded-2xl p-6">
            <h3 className="font-heading font-bold text-primary-700 mb-4">Diğer İlçeler</h3>
            <div className="space-y-2">
              {otherIlceler.map(i => (
                <Link key={i.slug} href={`/ilceler/${i.slug}`} className="block text-sm text-dark-600 hover:text-primary-600 transition">→ {i.name} Nakliyat</Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
