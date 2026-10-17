import { notFound } from 'next/navigation'
import Link from 'next/link'
import { turistik } from '@/lib/content'
import { meta, serviceSchema } from '@/lib/seo'
import { driveHours, deliveryPlan } from '@/data/pricing'
import { SITE_CONFIG } from '@/data/site-config'
import PageHero from '@/components/PageHero'
import PriceTable from '@/components/PriceTable'
import Article from '@/components/Article'
import Faq from '@/components/Faq'
import Sidebar from '@/components/Sidebar'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'

type P = { params: { slug: string } }

export function generateStaticParams() {
  return turistik.map((t) => ({ slug: t.slug }))
}

export function generateMetadata({ params }: P) {
  const t = turistik.find((x) => x.slug === params.slug)
  if (!t) return {}
  return meta({ title: t.metaTitle, description: t.metaDescription, path: `/turistik/${t.slug}` })
}

export default function TuristikPage({ params }: P) {
  const t = turistik.find((x) => x.slug === params.slug)
  if (!t) notFound()
  return (
    <>
      <JsonLd data={serviceSchema(`Adana ${t.name} Nakliyat`, t.metaDescription, `/turistik/${t.slug}`, t.name)} />
      <PageHero title={t.h1} lead={t.lead} crumbs={[{ href: '/turistik', name: 'Tatil Bölgeleri' }, { href: `/turistik/${t.slug}`, name: t.name }]} imageAlt={t.imgAlt} badge={`${t.il} · ${t.km} km`} />
      <div className="wrap grid gap-10 py-10 lg:grid-cols-[1fr_340px]">
        <article className="prose-bt min-w-0">
          <Article
            sections={t.sections}
            after={{
              match: /fiyat|ücret/i,
              node: (
                <>
                  <PriceTable km={t.km} from="Adana" to={t.name} caption={`Adana ⇄ ${t.name} tahmini taşıma fiyatları (${SITE_CONFIG.priceUpdated})`} />
                  <p className="text-sm text-slate-500">{driveHours(t.km)} yol, {deliveryPlan(t.km).toLocaleLowerCase('tr')}. Kesin fiyat keşif sonrası yazılı verilir.</p>
                </>
              ),
            }}
          />
        </article>
        <Sidebar wa={`Merhaba, Adana ${t.name} arası nakliyat için fiyat almak istiyorum.`} />
      </div>
      <div className="wrap">
        <Faq items={t.faq} title={`${t.name} taşınma soruları`} />
        <section className="py-8">
          <h2 className="text-xl font-bold text-navy-900">Diğer tatil bölgeleri</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {turistik.filter((o) => o.slug !== t.slug).map((o) => <Link key={o.slug} href={`/turistik/${o.slug}`} className="btn-ghost !py-2">{o.name}</Link>)}
          </div>
        </section>
        <CtaBand title={`${t.ek.a} taşınma planınızı yapalım`} />
      </div>
    </>
  )
}
