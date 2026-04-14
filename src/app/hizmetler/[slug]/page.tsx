import { hizmetler, getHizmetBySlug } from '@/data/hizmetler'
import { iller } from '@/data/iller'
import { SITE_CONFIG } from '@/data/site-config'
import { generatePageMeta, breadcrumbSchema } from '@/lib/seo'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Phone, ChevronRight, Shield } from 'lucide-react'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return hizmetler.map(h => ({ slug: h.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const h = getHizmetBySlug(params.slug)
  if (!h) return {}
  return generatePageMeta({ title: h.title, description: h.description, path: `/hizmetler/${h.slug}` })
}

export default function HizmetPage({ params }: { params: { slug: string } }) {
  const h = getHizmetBySlug(params.slug)
  if (!h) notFound()
  const otherServices = hizmetler.filter(s => s.slug !== h.slug)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Anasayfa', url: SITE_CONFIG.url },
        { name: 'Hizmetler', url: `${SITE_CONFIG.url}/hizmetler` },
        { name: h.name, url: `${SITE_CONFIG.url}/hizmetler/${h.slug}` },
      ])) }} />

      <div className="bg-dark-50 border-b border-dark-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-dark-500">
            <Link href="/" className="hover:text-primary-600">Anasayfa</Link><ChevronRight size={14} />
            <Link href="/hizmetler" className="hover:text-primary-600">Hizmetler</Link><ChevronRight size={14} />
            <span className="text-primary-600 font-medium">{h.name}</span>
          </nav>
        </div>
      </div>

      <section className="bg-primary-700 py-10">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">{h.name}</h1>
          <p className="text-blue-200 max-w-2xl mx-auto mb-6">{h.description}</p>
          <div className="flex justify-center gap-4">
            <a href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-accent-400 hover:bg-accent-500 text-primary-800 px-6 py-3 rounded-xl font-bold flex items-center gap-2"><Phone size={18}/> Hemen Ara</a>
            <Link href="/teklif-al" className="bg-white/10 text-white px-6 py-3 rounded-xl font-semibold border border-white/20">Teklif Al</Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: h.content }} />

          <div className="mt-8 bg-dark-50 rounded-2xl p-6">
            <h3 className="font-heading text-lg font-bold text-primary-700 mb-4">Bu hizmeti sunduğumuz şehirler</h3>
            <div className="flex flex-wrap gap-2">
              {iller.slice(0, 30).map(il => (
                <Link key={il.slug} href={`/iller/${il.slug}`} className="text-xs bg-white px-3 py-1.5 rounded-full text-dark-600 hover:text-primary-600 hover:bg-primary-50 transition">{il.name}</Link>
              ))}
            </div>
          </div>
        </div>
        <aside className="space-y-6">
          <div className="bg-primary-700 text-white rounded-2xl p-6 text-center">
            <Shield className="mx-auto mb-3 text-accent-300" size={36}/>
            <h3 className="font-heading font-bold text-lg mb-2">Ücretsiz Keşif</h3>
            <p className="text-blue-200 text-sm mb-4">Yerinde fiyat teklifi alın.</p>
            <a href={`tel:${SITE_CONFIG.phoneClean}`} className="block bg-accent-400 text-primary-800 py-3 rounded-xl font-bold">{SITE_CONFIG.phone}</a>
          </div>
          <div className="bg-dark-50 rounded-2xl p-6">
            <h3 className="font-heading font-bold text-primary-700 mb-4">Diğer Hizmetlerimiz</h3>
            {otherServices.map(s => (
              <Link key={s.slug} href={`/hizmetler/${s.slug}`} className="block text-sm text-dark-600 hover:text-primary-600 py-1.5 transition">→ {s.name}</Link>
            ))}
          </div>
          <div className="bg-accent-50 border border-accent-200 rounded-2xl p-6 text-center">
            <h3 className="font-heading font-bold text-primary-700 mb-2">Fiyat Hesapla</h3>
            <p className="text-dark-600 text-sm mb-3">Tahmini nakliyat ücretinizi öğrenin</p>
            <Link href="/fiyat-hesaplama" className="bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold text-sm inline-block">Hesapla →</Link>
          </div>
        </aside>
      </div>
    </>
  )
}
