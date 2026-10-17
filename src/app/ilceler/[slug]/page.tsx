import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ilceler } from '@/lib/content'
import { meta, serviceSchema } from '@/lib/seo'
import PageHero from '@/components/PageHero'
import Article from '@/components/Article'
import Faq from '@/components/Faq'
import Sidebar from '@/components/Sidebar'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'

type P = { params: { slug: string } }

export function generateStaticParams() {
  return ilceler.map((i) => ({ slug: i.slug }))
}

export function generateMetadata({ params }: P) {
  const x = ilceler.find((i) => i.slug === params.slug)
  if (!x) return {}
  return meta({ title: x.metaTitle, description: x.metaDescription, path: `/ilceler/${x.slug}` })
}

export default function IlcePage({ params }: P) {
  const x = ilceler.find((i) => i.slug === params.slug)
  if (!x) notFound()
  return (
    <>
      <JsonLd data={serviceSchema(`${x.name} Nakliyat`, x.metaDescription, `/ilceler/${x.slug}`, `${x.name}, Adana`)} />
      <PageHero title={x.h1} lead={x.intro[0]} crumbs={[{ href: '/ilceler', name: 'Adana İlçeleri' }, { href: `/ilceler/${x.slug}`, name: x.name }]} imageAlt={`${x.name} evden eve nakliyat`} badge="Adana" />
      <div className="wrap grid gap-10 py-10 lg:grid-cols-[1fr_340px]">
        <article className="prose-bt min-w-0">
          {x.intro.slice(1).map((p, i) => <p key={i}>{p}</p>)}
          <Article sections={x.sections} />
        </article>
        <Sidebar wa={`Merhaba, ${x.name} nakliyat için fiyat almak istiyorum.`} />
      </div>
      <div className="wrap">
        <Faq items={x.faq} title={`${x.name} nakliyat soruları`} />
        <section className="py-8">
          <h2 className="text-xl font-bold text-navy-900">Diğer Adana ilçeleri</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {ilceler.filter((o) => o.slug !== x.slug).map((o) => <Link key={o.slug} href={`/ilceler/${o.slug}`} className="btn-ghost !py-2">{o.name}</Link>)}
          </div>
        </section>
        <CtaBand />
      </div>
    </>
  )
}
