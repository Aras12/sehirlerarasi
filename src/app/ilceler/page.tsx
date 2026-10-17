import Link from 'next/link'
import { ilceler } from '@/lib/content'
import { meta } from '@/lib/seo'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata = meta({
  title: 'Adana İlçeleri Evden Eve Nakliyat',
  description: "Seyhan, Çukurova, Yüreğir, Sarıçam, Ceyhan, Kozan ve Adana'nın tüm ilçelerinden şehirler arası ve şehir içi evden eve nakliyat.",
  path: '/ilceler',
})

export default function IlcelerPage() {
  return (
    <>
      <PageHero title="Adana İlçeleri Nakliyat" lead="Adana'nın 15 ilçesinden Türkiye'nin her yerine ev ve eşya taşıma." crumbs={[{ href: '/ilceler', name: 'Adana İlçeleri' }]} imageAlt="Adana ilçeleri evden eve nakliyat" />
      <div className="wrap py-10">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {ilceler.map((x) => <Link key={x.slug} href={`/ilceler/${x.slug}`} className="card px-4 py-3 font-semibold text-navy-900 hover:border-sun-300">{x.name} Nakliyat</Link>)}
        </div>
        <CtaBand />
      </div>
    </>
  )
}
