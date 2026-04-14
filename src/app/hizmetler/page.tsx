import { hizmetler } from '@/data/hizmetler'
import { generatePageMeta } from '@/lib/seo'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'
import { SITE_CONFIG } from '@/data/site-config'

export const metadata = generatePageMeta({
  title: 'Nakliyat Hizmetlerimiz | Adana Evden Eve Nakliyat',
  description: 'Adana nakliyat hizmetlerimiz: evden eve nakliyat, asansörlü taşıma, şehir içi nakliye, kamyonet nakliye, ofis taşıma ve eşya depolama.',
  path: '/hizmetler',
  keywords: ['adana nakliyat hizmetleri', 'evden eve nakliyat', 'asansörlü taşıma', 'kamyonet nakliye'],
})

const images: Record<string, string> = {
  'evden-eve-nakliyat': '/images/hizmetler/evden-eve-nakliyat.jpg',
  'asansorlu-tasima': '/images/hizmetler/asansorlu-tasima.jpg',
  'sehir-ici-nakliye': '/images/hizmetler/sehir-ici-nakliye.jpg',
  'kamyonet-nakliye': '/images/hizmetler/kamyonet-nakliye.jpg',
  'ofis-tasima': '/images/hizmetler/ofis-tasima.png',
  'esya-depolama': '/images/hizmetler/esya-depolama.png',
}

export default function HizmetlerPage() {
  return (
    <>
      <section className="bg-primary-700 py-10">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-3">Nakliyat Hizmetlerimiz</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">Adana ve Türkiye genelinde sunduğumuz profesyonel nakliyat hizmetleri</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hizmetler.map((h) => (
            <Link key={h.slug} href={`/hizmetler/${h.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition card-hover">
              <div className="h-48 relative overflow-hidden bg-primary-100">
                <Image src={images[h.slug] || '/images/galeri/galeri1.jpg'} alt={h.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h2 className="font-heading text-xl font-bold text-dark-800 group-hover:text-primary-600 transition mb-2">{h.name}</h2>
                <p className="text-dark-500 text-sm mb-4">{h.shortDesc}</p>
                <span className="text-primary-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Detaylı Bilgi <ArrowRight size={16} /></span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-accent-50 rounded-2xl p-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-primary-700 mb-4">Tüm Hizmetlerimiz İçin Bizi Arayın</h2>
          <p className="text-dark-600 mb-6">Ücretsiz keşif ve fiyat teklifi için hemen iletişime geçin.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2"><Phone size={18}/>{SITE_CONFIG.phone}</a>
            <Link href="/fiyat-hesaplama" className="bg-accent-400 hover:bg-accent-500 text-primary-800 px-6 py-3 rounded-xl font-bold">Online Fiyat Hesapla</Link>
          </div>
        </div>
      </div>
    </>
  )
}
