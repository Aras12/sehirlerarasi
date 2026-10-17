import Link from 'next/link'
import Image from 'next/image'
import { ShieldCheck, Package, Truck, FileCheck, MapPinned, ArrowRight, Phone } from 'lucide-react'
import { hizmetler, rotalar, turistik, blog, sayfalar, iller, featuredServiceSlugs, trSort } from '@/lib/content'
import { SITE_CONFIG, waLink } from '@/data/site-config'
import { meta, businessSchema } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import ServiceCard from '@/components/ServiceCard'
import PriceCalculator from '@/components/PriceCalculator'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import { estimate, formatTl } from '@/data/pricing'

const home = sayfalar.home

export const metadata = meta({ title: home.metaTitle, description: home.metaDescription, path: '/' })

const features = [
  { Icon: Truck, t: 'Aktarmasız taşıma', d: 'Tam araçta eşyanız başka araca aktarılmaz' },
  { Icon: ShieldCheck, t: 'Sigortalı', d: 'Her taşımada nakliyat sigortası poliçesi' },
  { Icon: Package, t: 'Ambalaj dahil', d: 'Balonlu naylon, streç, battaniye, koli' },
  { Icon: FileCheck, t: 'Yazılı fiyat', d: 'Ücretsiz keşif, sonra değişmeyen fiyat' },
  { Icon: MapPinned, t: '81 il', d: 'Adana çıkışlı, Türkiye geneli hizmet' },
]

export default function HomePage() {
  const options = trSort(iller, (i) => i.name).map((i) => ({ code: i.code, name: i.name }))
  const featured = featuredServiceSlugs.map((s) => hizmetler.find((h) => h.slug === s)!).filter(Boolean)
  const secs = home.sections as { h2: string; paragraphs: string[]; bullets?: string[] }[]
  const [s1, s2, surec, ...rest] = secs
  return (
    <>
      <JsonLd data={[businessSchema, { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE_CONFIG.name, url: SITE_CONFIG.url }]} />

      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-700">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sun-400/10 blur-2xl" aria-hidden />
        <div className="wrap relative grid items-center gap-10 py-10 lg:grid-cols-[1.1fr_1fr] lg:py-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-sun-300 ring-1 ring-white/15">Türkiye geneli · 81 il · Adana merkez</span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-5xl">{home.h1}</h1>
            <p className="mt-4 max-w-xl text-base text-navy-100 sm:text-lg">{home.heroText}</p>
            <ul className="mt-5 grid max-w-lg grid-cols-2 gap-2 text-sm text-white">
              {['Aktarmasız tam araç', 'Sigorta poliçesi', 'Ambalaj ve montaj dahil', 'Yazılı fiyat'].map((x) => (
                <li key={x} className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 shrink-0 text-sun-400" /> {x}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={SITE_CONFIG.phoneHref} className="btn-sun text-base"><Phone className="h-5 w-5" /> Hemen Ara</a>
              <a href={waLink('Merhaba, şehirler arası nakliyat için fiyat almak istiyorum.')} target="_blank" rel="noopener noreferrer" className="btn-wa text-base"><WhatsAppIcon /> WhatsApp</a>
              <Link href="/teklif-al" className="btn border border-white/30 text-base text-white hover:bg-white/10">Teklif Al</Link>
            </div>
          </div>
          <PriceCalculator iller={options} from="01" to="06" compact />
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white">
        <div className="wrap grid grid-cols-2 gap-4 py-6 sm:grid-cols-3 lg:grid-cols-5">
          {features.map(({ Icon, t, d }) => (
            <div key={t} className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sun-100 text-navy-800"><Icon className="h-5 w-5" /></span>
              <span><span className="block text-sm font-bold text-navy-900">{t}</span><span className="block text-xs text-slate-500">{d}</span></span>
            </div>
          ))}
        </div>
      </section>

      <div className="wrap pt-8">
        <Image src="/img/genel/sehirler-arasi-evden-eve-nakliyat-banner.webp" alt="BarajTrans şehirler arası evden eve nakliyat kamyonu ve Türkiye haritası" width={1942} height={809} sizes="(max-width:1280px) 100vw, 1280px" className="h-auto w-full rounded-3xl shadow-card" />
      </div>

      <section className="wrap py-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="chip">Hizmetlerimiz</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy-900">Şehirler arası taşımada her ihtiyaca uygun hizmet</h2>
          </div>
          <Link href="/hizmetler" className="btn-ghost">Tüm hizmetler <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((s) => <ServiceCard key={s.slug} s={s} />)}
        </div>
      </section>

      <section className="bg-navy-50/60 py-14">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <div className="prose-bt">
            {[s1, s2].map((s) => (
              <div key={s.h2}>
                <h2>{s.h2}</h2>
                {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            ))}
          </div>
          <Image src="/img/genel/turkiye-81-il-nakliyat-haritasi.webp" alt="Adana'dan Türkiye'nin 81 iline şehirler arası nakliyat haritası" width={1536} height={1024} sizes="(max-width:1024px) 100vw, 50vw" className="h-auto w-full rounded-3xl shadow-card" />
        </div>
      </section>

      <section className="wrap py-14">
        <h2 className="text-3xl font-extrabold text-navy-900">{surec.h2}</h2>
        {surec.paragraphs.map((p, i) => <p key={i} className="mt-3 max-w-3xl text-slate-700">{p}</p>)}
        {surec.bullets && (
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {surec.bullets.map((b, i) => (
              <li key={b} className="card relative p-5 pl-16">
                <span className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-sun-400 text-sm font-extrabold text-navy-950">{i + 1}</span>
                <span className="text-sm text-slate-700">{b}</span>
              </li>
            ))}
          </ol>
        )}
      </section>

      <section className="bg-white pb-6">
        <div className="wrap grid gap-x-12 gap-y-2 prose-bt lg:grid-cols-2">
          {rest.map((s) => (
            <div key={s.h2}>
              <h2 className="!mt-6">{s.h2}</h2>
              {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              {s.bullets && <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-900 py-14 text-white">
        <div className="wrap">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="chip !bg-white/10 !text-sun-300">Rotalar</p>
              <h2 className="mt-2 text-3xl font-extrabold">En çok taşınma yapılan rotalar</h2>
            </div>
            <Link href="/rotalar" className="btn border border-white/25 text-white hover:bg-white/10">Tüm rotalar <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {rotalar.slice(0, 12).map((r) => {
              const [lo] = estimate(r.km, '2+1')
              return (
                <Link key={r.slug} href={`/rotalar/${r.slug}`} className="group rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10">
                  <p className="font-bold">Adana ⇄ {r.to}</p>
                  <p className="mt-1 text-xs text-navy-200">{r.km} km · 2+1 ev {formatTl(lo)}&apos;den başlayan tahmini fiyat</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="wrap py-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="chip">Tatil bölgeleri</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy-900">Yazlığa ve sahile taşınma</h2>
          </div>
          <Link href="/turistik" className="btn-ghost">Tüm bölgeler <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {turistik.slice(0, 6).map((t) => (
            <Link key={t.slug} href={`/turistik/${t.slug}`} className="card p-4 transition hover:border-sun-300">
              <p className="font-bold text-navy-900">{t.name}</p>
              <p className="text-xs text-slate-500">{t.il} · yaklaşık {t.km} km</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-navy-50/60 py-14">
        <div className="wrap">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-extrabold text-navy-900">Taşınma rehberi</h2>
            <Link href="/blog" className="btn-ghost">Tüm yazılar <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {blog.slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group card overflow-hidden">
                <div className="relative aspect-[16/10]"><Image src={p.image} alt={p.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" /></div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase text-sun-700">{p.category}</p>
                  <h3 className="mt-1 font-bold text-navy-900 group-hover:text-navy-600">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap">
        <Faq items={(sayfalar.sss as { q: string; a: string }[]).slice(0, 6)} title="Şehirler arası nakliyat hakkında sık sorulanlar" />
        <CtaBand />
      </div>
    </>
  )
}
