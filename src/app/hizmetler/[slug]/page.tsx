import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { hizmetler } from '@/lib/content'
import { meta, serviceSchema } from '@/lib/seo'
import PageHero from '@/components/PageHero'
import Article from '@/components/Article'
import Faq from '@/components/Faq'
import Sidebar from '@/components/Sidebar'
import CtaBand from '@/components/CtaBand'
import ServiceCard from '@/components/ServiceCard'
import JsonLd from '@/components/JsonLd'

type P = { params: { slug: string } }

export function generateStaticParams() {
  return hizmetler.map((h) => ({ slug: h.slug }))
}

export function generateMetadata({ params }: P) {
  const s = hizmetler.find((h) => h.slug === params.slug)
  if (!s) return {}
  return meta({ title: s.metaTitle, description: s.metaDescription, path: `/hizmetler/${s.slug}`, image: s.image })
}

export default function ServicePage({ params }: P) {
  const s = hizmetler.find((h) => h.slug === params.slug)
  if (!s) notFound()
  const others = hizmetler.filter((h) => h.slug !== s.slug).slice(0, 4)
  return (
    <>
      <JsonLd data={serviceSchema(s.name, s.metaDescription, `/hizmetler/${s.slug}`, 'Türkiye')} />
      <PageHero title={s.h1} lead={s.short} crumbs={[{ href: '/hizmetler', name: 'Hizmetler' }, { href: `/hizmetler/${s.slug}`, name: s.name }]} imageAlt={s.imageAlt} />
      <div className="wrap grid gap-10 py-10 lg:grid-cols-[1fr_340px]">
        <article className="prose-bt min-w-0">
          <Image src={s.image} alt={s.imageAlt} width={800} height={800} sizes="(max-width:640px) 100vw, 320px" className="mb-6 h-auto w-full rounded-2xl sm:float-right sm:ml-6 sm:w-72" />
          {s.intro.map((p, i) => <p key={i}>{p}</p>)}
          <Article sections={s.sections} />
        </article>
        <Sidebar wa={`Merhaba, ${s.name.toLocaleLowerCase('tr')} için fiyat almak istiyorum.`} />
      </div>
      <div className="wrap">
        <Faq items={s.faq} title={`${s.name} hakkında sorular`} />
        <section className="py-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-bold text-navy-900">Diğer hizmetler</h2>
            <Link href="/hizmetler" className="text-sm font-semibold text-navy-600">Tümü →</Link>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">{others.map((o) => <ServiceCard key={o.slug} s={o} />)}</div>
        </section>
        <CtaBand />
      </div>
    </>
  )
}
