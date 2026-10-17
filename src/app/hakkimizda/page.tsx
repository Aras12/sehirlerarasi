import Image from 'next/image'
import { sayfalar } from '@/lib/content'
import { meta } from '@/lib/seo'
import PageHero from '@/components/PageHero'
import Article from '@/components/Article'
import CtaBand from '@/components/CtaBand'

const h = sayfalar.hakkimizda
export const metadata = meta({ title: h.metaTitle, description: h.metaDescription, path: '/hakkimizda' })

export default function Hakkimizda() {
  return (
    <>
      <PageHero title={h.h1} crumbs={[{ href: '/hakkimizda', name: 'Hakkımızda' }]} imageAlt="BarajTrans nakliyat ekibi ve kamyonu" />
      <div className="wrap grid gap-10 py-10 lg:grid-cols-[1fr_420px]">
        <article className="prose-bt"><Article sections={h.sections} /></article>
        <div className="space-y-4">
          <Image src="/img/genel/barajtrans-logo.webp" alt="BarajTrans logosu" width={900} height={300} className="h-auto w-full rounded-2xl bg-white p-4 shadow-card" />
          <Image src="/img/genel/turkiye-81-il-nakliyat-haritasi.webp" alt="BarajTrans 81 il hizmet haritası" width={1536} height={1024} sizes="420px" className="h-auto w-full rounded-2xl shadow-card" />
        </div>
      </div>
      <div className="wrap"><CtaBand /></div>
    </>
  )
}
