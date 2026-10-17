import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { blog, hizmetler } from '@/lib/content'
import { meta } from '@/lib/seo'
import { SITE_CONFIG, pageUrl } from '@/data/site-config'
import PageHero from '@/components/PageHero'
import Article from '@/components/Article'
import Faq from '@/components/Faq'
import Sidebar from '@/components/Sidebar'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'

type P = { params: { slug: string } }

export function generateStaticParams() {
  return blog.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: P) {
  const p = blog.find((x) => x.slug === params.slug)
  if (!p) return {}
  return meta({ title: p.metaTitle, description: p.metaDescription, path: `/blog/${p.slug}`, image: p.image, type: 'article' })
}

const fmt = (d: string) => new Date(d).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })

export default function PostPage({ params }: P) {
  const p = blog.find((x) => x.slug === params.slug)
  if (!p) notFound()
  const related = p.relatedServices.map((s) => hizmetler.find((h) => h.slug === s)).filter(Boolean) as typeof hizmetler
  const more = blog.filter((x) => x.slug !== p.slug).slice(0, 3)
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BlogPosting', headline: p.title, description: p.metaDescription, datePublished: p.date, dateModified: p.date, image: pageUrl(p.image), mainEntityOfPage: pageUrl(`/blog/${p.slug}`), author: { '@type': 'Organization', name: SITE_CONFIG.name }, publisher: { '@id': `${SITE_CONFIG.url}/#firma` } }} />
      <PageHero title={p.title} lead={p.excerpt} crumbs={[{ href: '/blog', name: 'Blog' }, { href: `/blog/${p.slug}`, name: p.title }]} image={p.image} imageAlt={p.title} badge={p.category}>
        <p className="mt-4 text-sm text-navy-200">{fmt(p.date)}</p>
      </PageHero>
      <div className="wrap grid gap-10 py-10 lg:grid-cols-[1fr_340px]">
        <article className="prose-bt min-w-0">
          <Article sections={p.sections} />
          {related.length > 0 && (
            <div className="mt-8 rounded-2xl bg-navy-50 p-5">
              <p className="!mb-2 font-bold text-navy-900">İlgili hizmetler</p>
              <div className="flex flex-wrap gap-2">{related.map((s) => <Link key={s.slug} href={`/hizmetler/${s.slug}`} className="btn-ghost !py-2">{s.name}</Link>)}</div>
            </div>
          )}
        </article>
        <Sidebar />
      </div>
      <div className="wrap">
        {p.faq?.length > 0 && <Faq items={p.faq} />}
        <section className="py-10">
          <h2 className="text-xl font-bold text-navy-900">Diğer yazılar</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {more.map((m) => (
              <Link key={m.slug} href={`/blog/${m.slug}`} className="card overflow-hidden hover:border-sun-300">
                <div className="relative aspect-[16/10]"><Image src={m.image} alt={m.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" /></div>
                <p className="p-4 font-bold text-navy-900">{m.title}</p>
              </Link>
            ))}
          </div>
        </section>
        <CtaBand />
      </div>
    </>
  )
}
