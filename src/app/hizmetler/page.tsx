import { hizmetler } from '@/lib/content'
import { meta } from '@/lib/seo'
import PageHero from '@/components/PageHero'
import ServiceCard from '@/components/ServiceCard'
import CtaBand from '@/components/CtaBand'

export const metadata = meta({
  title: 'Nakliyat Hizmetlerimiz: Ev, Parça Eşya, Ambar, Ofis',
  description: 'Şehirler arası evden eve nakliyat, parça eşya taşıma, ambar ve kamyonet nakliye, asansörlü ve sigortalı taşıma, depolama, ofis ve özel eşya taşıma hizmetleri.',
  path: '/hizmetler',
})

export default function HizmetlerPage() {
  return (
    <>
      <PageHero title="Nakliyat Hizmetlerimiz" lead="Tek parça eşyadan villaya, öğrenci evinden kurumsal ofise kadar şehirler arası her taşıma için." crumbs={[{ href: '/hizmetler', name: 'Hizmetler' }]} imageAlt="BarajTrans nakliyat hizmetleri" image="/img/hizmet/evden-eve-nakliyat-afis.webp" />
      <div className="wrap py-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">{hizmetler.map((s) => <ServiceCard key={s.slug} s={s} />)}</div>
        <CtaBand />
      </div>
    </>
  )
}
