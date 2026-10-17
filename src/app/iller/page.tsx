import Link from 'next/link'
import { iller, trSort } from '@/lib/content'
import { meta } from '@/lib/seo'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata = meta({
  title: '81 İl Şehirler Arası Nakliyat ve Evden Eve Taşıma',
  description: "Adana merkezli BarajTrans ile Türkiye'nin 81 iline şehirler arası nakliyat: ev taşıma fiyatları, parça eşya taşıma ve sigortalı taşıma bilgileri il il.",
  path: '/iller',
})

export default function IllerPage() {
  const regions = Array.from(new Set(iller.map((i) => i.region)))
  return (
    <>
      <PageHero title="81 İle Şehirler Arası Nakliyat" lead="Taşınacağınız ili seçin; mesafe, tahmini fiyat ve o ile özel taşıma bilgilerini görün." crumbs={[{ href: '/iller', name: 'İller' }]} image="/img/genel/turkiye-81-il-nakliyat-haritasi.webp" imageAlt="Türkiye 81 il şehirler arası nakliyat haritası" />
      <div className="wrap py-10">
        {regions.map((r) => (
          <section key={r} className="mb-10">
            <h2 className="mb-4 text-xl font-bold text-navy-900">{r}</h2>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
              {trSort(iller.filter((i) => i.region === r), (i) => i.name).map((i) => (
                <Link key={i.code} href={`/iller/${i.slug}`} className="card flex items-center justify-between gap-2 px-4 py-3 text-sm transition hover:border-sun-300">
                  <span className="font-semibold text-navy-900">{i.name}</span>
                  {i.code !== '01' && <span className="text-xs text-slate-500">{i.kmAdana} km</span>}
                </Link>
              ))}
            </div>
          </section>
        ))}
        <CtaBand />
      </div>
    </>
  )
}
